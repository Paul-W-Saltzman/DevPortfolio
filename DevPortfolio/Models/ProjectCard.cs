namespace DevPortfolio.Models
{

    public class ProjectCard
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public string PrimaryColor { get; set; } = "blue";
        public string SecondaryColor { get; set; } = "purple";
        public bool IsActive { get; set; } = false;
    }


}
