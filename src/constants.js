export const jsQuiz = {
    questions: [
        {
            question: "Does the data you requesting originate in Salesforce?", // 1
            choices: [
                "Yes", // SF 
                "No",
            ], 
            next: [
                

            ],
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
        {
            question: "Is there a single source of data?", // 2
            choices: [
                "Yes", 
                "No",
            ], 
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
        {
            question: "Is the single source of data available in Saleforce?", // 3
            choices: [
                "Yes", // SF
                "No",
            ], 
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
        {
            question: "Are there two sources of data on Salesforce?", // 4
            choices: [
                "Yes", // SF
                "No",
            ], 
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
        {
            question: "Are both data sources available in Salesforce?", // 5
            choices: [
                "Yes", // SF
                "No",
            ], 
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
        {
            question: "Are the data sources available in Tableau and the Data Warehouse?", // 6
            choices: [
                "Yes", // Tb 
                "No",
            ], 
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
        {
            question: "Are there more than two sources of data?", // 7
            choices: [
                "Yes", // Tb
                "No",
            ], 
            points: {
                "Yes" : 0,
                "No" : 0,
            }
            
        },
     
      
    ]
};

export const resultInitialState = {
    score: 0,
}