// Bibliotecas
const request = require('supertest');
const sinon = require ('sinon');
const  { expect } = require ('chai');

// Aplicação 
const app =require('../../app');

// Testes
describe ('Transfer Controller', () => {
    describe('POST /transfers',() =>{
        it('Quando uso dados válidos o retorno será 201',async () =>{
            const resposta = await request (app)
            .post('/transfer')
            .send ({
                "from": "Julio",
                "to": "Carol",
                "value": 100
            });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error','Remetente ou destinatário inválido')
        })
    });

    describe ('GET /transfer', () => {

    })
});



