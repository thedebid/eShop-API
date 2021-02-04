const categoryModel = require('./category.model')

function getCategory() {
    return categoryModel.find()
}
function saveCategory(data) {
    var newCategory = new categoryModel({})
    newCategory.name = data.name
    newCategory.icon = data.icon
    return newCategory.save()
}

module.exports = {
    getCategory,
    saveCategory,
}
