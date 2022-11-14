export default class tags{
    constructor(){
        this.setTagsAndNutrients();
    }

    setTagsAndNutrients(){
        this.totalCals = 0;
        this.totalProtein = 0;
        this.totalFat = 0;
        this.totalCarbs = 0;
        this.totalCholestrol = 0; 
        this.totalSodium = 0;     
        this.totalFiber = 0;     
        this.totalSugar = 0;     
        
        this.tags = [];
    }
}