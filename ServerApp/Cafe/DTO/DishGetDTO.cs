namespace Cafe.DTO
{
    public class DishGetDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public IngredientGetDTO[] Ingredients { get; set; }
        
        public string CategoryName { get; set; }
        public string Img { get; set; }
    }
}
