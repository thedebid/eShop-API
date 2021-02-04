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
function categoryById(id) {
    return categoryModel.findById(id)
}
function deleteCategory(id) {
    return categoryModel.findByIdAndRemove(id)
}
module.exports = {
    getCategory,
    saveCategory,
    categoryById,
    deleteCategory,
}
