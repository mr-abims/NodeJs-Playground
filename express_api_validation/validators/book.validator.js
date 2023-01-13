const joi = require('joi');

const validateBookMiddleWare = async (req, res, next) => {
    const bookPayload = req.body;
    try {
        await bookValidator.validateAsync(bookPayload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(406).send(error.details[0].message);
    }

}


const bookValidator = joi.object({
    title: joi.string()
        .min(5)
        .max(255)
        .required(),
    shortDescription: joi.string()
        .min(5)
        .max(255)
        .optional(),
    year: joi.number()
        .min(1900)
        .max(2022)
        .required(),
    isbn: joi.string()
        .min(10)
        .max(13)
        .required(),
    price: joi.number()
        .min(0)
        .required(),
    createAt: joi.date()
        .default(Date.now()),
    lastUpdateAt: joi.date()
        .default(Date.now())
})

module.exports = validateBookMiddleWare;