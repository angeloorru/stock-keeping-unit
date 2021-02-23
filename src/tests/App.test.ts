import app from "../index";
import * as chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);
chai.should();

describe("GET endpoints test:", () => {

    it(" should return a not found response", (done) => {
        chai.request(app)
            .get("/test-sku")
            .end((err, res) => {
                res.should.have.status(404);

                done();
            });
    });

    it("it should return a successful response when fetching all transactions", (done) => {
        chai.request(app)
            .get("/sku/fetch-transactions")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");

                done();
            });
    });

    it("it should return a successful response when fetching all transactions by ID", (done) => {
        chai.request(app)
            .get("/sku/fetch-transactions/IQZ340003/37/30")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");

                done();
            });
    });

    it("it should return a successful response when fetching all stock", (done) => {
        chai.request(app)
            .get("/sku/fetch-stock")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");

                done();
            });
    });

    it("it should return a successful response when fetching all stock by ID", (done) => {
        chai.request(app)
            .get("/sku/fetch-stock/IQZ340003/37/30")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.keys("sku", "stock");

                done();
            });
    });

    it("it should return an unsuccessful stock response with an error", (done) => {
        chai.request(app)
            .get("/sku/fetch-stock/test/test/test")
            .end((err, res) => {
                res.should.have.status(404);
                res.text.should.be.a("string");
                res.text.should.be.equal('"Error: The entry in Stock does not exist"');

                done();
            });
    });

    it("it should return an unsuccessful transaction response with an error", (done) => {
        chai.request(app)
            .get("/sku/fetch-transactions/test/test/test")
            .end((err, res) => {
                res.should.have.status(404);
                res.text.should.be.a("string");
                res.text.should.be.equal('"Error: The entry in Transactions does not exist"');

                done();
            });
    });

    it("it should return an unsuccessful current stock response with an error", (done) => {
        chai.request(app)
            .get("/sku/fetch-transactions/test/test/test")
            .end((err, res) => {
                res.should.have.status(404);
                res.text.should.be.a("string");
                res.text.should.be.equal('"Error: The entry in Transactions does not exist"');

                done();
            });
    });

    it("it should return a successful stock update", (done) => {
        let stockBeforeUpdate;
        let stockAfterUpdate;
        let transactions;

        //Get the stock value before an update
        chai.request(app)
            .get("/sku/fetch-stock/IQZ340003/37/30")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.stock.should.be.equal(1811);
                stockBeforeUpdate = res.body.stock;

                //Get transactions
                chai.request(app)
                    .get("/sku/fetch-transactions/IQZ340003/37/30")
                    .end((err, res) => {
                        res.should.have.status(200);
                        transactions = res.body;

                        stockAfterUpdate = stockBeforeUpdate;

                        transactions.map((value) => {
                            //Remove from stock
                            if (value.type === "order") stockAfterUpdate -= value.qty;
                            //Item returned, add back to stock
                            if (value.type === "refund") stockAfterUpdate += value.qty;
                        })

                        stockAfterUpdate.should.be.equal(1775);
                    });

                chai.request(app)
                    .get("/sku/fetch-current-stock/IQZ340003/37/30")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.qty.should.not.be.equal(stockBeforeUpdate);
                        res.body.qty.should.be.equal(stockAfterUpdate);

                        done();
                    });
            });
    });

    it("it should return the quantity in stock set to 0 - stock does not exist", (done) => {
        let quantityInTransactionFile;

        chai.request(app)
            .get("/sku/fetch-transactions/test/68/09")
            .end((err, res) => {
                res.should.have.status(200);
                res.body[0].qty.should.be.equal(8);
                quantityInTransactionFile = res.body[0].qty;

                //Verify that stock sku does not exist - hence default to 0
                chai.request(app)
                    .get("/sku/fetch-stock/test/68/09")
                    .end((err, res) => {
                        res.should.have.status(404);
                    });

                chai.request(app)
                    .get("/sku/fetch-current-stock/test/68/09")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.qty.should.be.equal(-8);

                        done();
                    });
            });
    });
});