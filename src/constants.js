export const jsQuiz = {
    questions: [
        {
            question: "Does the data you requesting originate in Salesforce?", // 1
            choices: [
                "Yes", // SF 
                "No",
            ], 
            leadsToResult: "salesforce",
            nextQuestionNo: 1,
            
        
            
        },
        {
            question: "Is there a single source of data?", // 2
            choices: [
                "Yes", 
                "No",
            ], 
            nextQuestionYes: 2, 
            nextQuestionNo: 3,
           
            
        },
        {
            question: "Is the single source of data available in Saleforce?", // 3
            choices: [
                "Yes", // SF
                "No",
            ], 
            leadsToResult: "salesforce",
            nextQuestionNo: 3,
         
            
        },
        {
            question: "Are all data sources available in Salesforce?", // 4
            choices: [
                "Yes", // SF
                "No",
            ], 
            leadsToResult: "salesforce",
            nextQuestionNo: 4,
            
        },
        {
            question: "Are the data sources available in Tableau and the Data Warehouse?", // 5
            choices: [
                "Yes", // SF
                "No",
            ], 
            leadsToResult: "tableau",
            nextQuestionNo: 5
          
            
        },
        {
            question: "Is there a Tableau Data Connector for the data source(s)?", // 6
            choices: [
                "Yes", // Tb 
                "No",
            ], 
            leadsToResult: "tableau",

      
            
        },
        
      
    ]
};

export const resultInitialState = {
    score: 0,
}