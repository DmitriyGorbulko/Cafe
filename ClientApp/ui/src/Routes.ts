export enum Routes{
    Root = '/',
    Login = '/login',
    Registration = '/registration',
    ManageMenu = '/manageMenu',
    
    CategoryIngredient = '/categoryIngredient', 
    CreateCategoryIngredient = '/categoryIngredient/create',
    UpdateCategoryIngredient = '/categoryIngredient/update/:id',
    
    CategoryDishes = '/categoryDishes',
    CategoryDish = '/categoryDish',
    CreateCategoryDish = '/categoryDish/create',
    UpdateCategoryDish = '/categoryDish/update/:id',
    
    Ingredient = '/ingredient',
    CreateIngredient = '/ingredient/create',
    UpdateIngredient = '/ingredient/update/:id',
    
    Dishes = '/categoryDish/:id/dishes',
    Dish = '/dish/:id',
    CreateDish = '/dish/create',
    UpdateDish = '/dish/update/:id',
    ManageDishes = '/dish/manage',
    
    Table = '/table', 
    Basket = '/basket',
}