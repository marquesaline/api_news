import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

import { goodRequest, updateRequest } from '../mocks/mock-news';

chai.use(chaiHttp);
chai.should();

describe('News', () => {
    it('Should create a new news', (done) => {
        chai
            .request(server.app)
            .post('/news')
            .send(goodRequest)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });

    it('Should return a list of news', (done) => {
        chai
            .request(server.app)
            .get('/news')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('Should return a news', (done) => {
        let id = '638a963f0665ecf7d834080a';
        chai
            .request(server.app)
            .get(`/news/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('Should update a news', (done) => {
        let id = '638a9760b38be6e94a32427a';
        chai
            .request(server.app)
            .put(`/news/${id}`)
            .send(updateRequest)
            .end((err, res) => {
                res.should.have.status(202);
                res.body.should.have
                    .property('message')
                    .equal('Notícia atualizada com sucesso!')
                done();
            });
    });

    it('Should delete a news', (done) => {
        let id = '638a96bede1c98841f53803e';
        chai
            .request(server.app)
            .delete(`/news/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have
                    .property('result')
                    .equal('Notícia excluída com sucesso!')
                done();
            });
    });
});