"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class response {
    constructor() { }
    static success(req, res, user, status = 200) {
        res.status(status).json({
            ok: true,
            data: user
        });
    }
    static notFound(req, res, err, status = 404) {
        res.status(status).json({
            ok: false,
            err
        });
    }
    static error(req, res, err, status = 500) {
        res.status(status).json({
            ok: false,
            err
        });
    }
}
exports.response = response;
