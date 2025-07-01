
import request from 'supertest';

import app from '../../infra/server/server';

describe("POST / users", () => {

    it("deve criar um novo usuário com sucesso", async () => {
        const response = await request(app).post("/users").send({
            name: "Dandara Oliveira da Silva",
            login: "dandara1995",
            email: "dandara@example.com",
            password: "123456"
        });

        expect(response.status).toBe(201)
    });

    it("deve retornar erro em caso de email duplicado", async () => {
         await request(app).post("/users").send({
            name: "Dandara Oliveira da Silva",
            login: "dandara1995",
            email: "dandara@example.com",
            password: "123456"
        });
        const response = await request(app).post("/users").send({
            name: "Bianca Santana",
            login: "bianca1995",
            email: "dandara@example.com",
            password: "1xjsjs"
        });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'usuário já existe com esse email')


    });    
});