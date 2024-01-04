const processMongooseListToObject = (mongooseArray) => {
    return mongooseArray.map(item => item.toObject());
}

const processMongooseDetailToObject = (mongooseDetail) => {
    return mongooseDetail.toObject();
}

module.exports = {
    processMongooseListToObject,
    processMongooseDetailToObject
}