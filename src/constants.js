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


export const pointBasedQuestions = {
    questions: [
        {
            question: "Does the data need to be joined for additional analysis?",
            choices: [
                {text: "Yes", result: "tableau"},
                {text: "No", result: "salesforce"},

            ],

        },
        {
            question: "Do you need historical data?",
            choices: [
                {text: "Yes", result: "tableau"},
                {text: "No", result: "salesforce"},
            ]
        },
        {
            question: "Do you need to continue pulling in data on a regular cadence?",
            choices: [
                {text: "Yes", result: "tableau"},
                {text: "No", result: "salesforce"},
            ]
        },
        {
            question: "Do you need the data update monthly or on a more frequent basis?",
            choices: [
                {text: "Yes", result: "tableau"},
                {text: "No", result: "salesforce"},
            ]
        },
        {
            question: "How do you want your data formatted? ('Yes': Visualization, 'No': Spreadsheet or report)",
            choices: [
                {text: "Yes", result: "tableau"},
                {text: "No", result: "salesforce"},
            ]
        },
        {
            question: "Are you comparing data points?",
            choices: [
                {text: "Yes", result: "tableau"},
                {text: "No", result: "salesforce"},
            ]
        },
        {
            question: "Will you perform data analysis after this?",
            choices: [
                {text: "Yes", result: "salesforce"},
                {text: "No", result: "tableau"},
            ]
        },
        
    ]

};