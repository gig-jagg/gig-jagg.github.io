const boxData = [
        
        { title: "STUDY OF THE MORPHOMETRY OF THE PITUITARY GLAND IN A NORTH TRINIDADIAN POPULATION",
        description: "Medical image analysis, statistical analysis, data visualization, data preprocessing, and morphometric analysis of MRI-based anatomical structures.",
        link:"https://drive.google.com/file/d/1GVj5lsYuorlEsmFB2HL8DnvUwMPve7hF/view?usp=drive_link"},

        { title: "SUPERVISED & UNSUPERVISED LEARNING, AND TEXT MINING ALGORITHMS", 
        description: "Data preprocessing, feature engineering, classification, regression, clustering, association rule mining, and text mining. Applied cross-validation, model evaluation, PCA, and oversampling for data analysis.",
        link:"https://drive.google.com/file/d/1YKHVPOhq2PJnWnUq1QqrPicRhUZRcbTu/view?usp=drive_link"},

        { title: "IMAGE-BASED PNEUMONIA RECOGNITION USING CONVOLUTIONAL NEURAL NETWORKS",
        description: "Deep learning, Convolutional Neural Networks (CNNs), data preprocessing, model architecture design, hyperparameter tuning, evaluation metrics, and performance optimization. Applied CNNs for pneumonia classification in chest X-ray images.",
        link:"https://drive.google.com/file/d/1hTwTWak7LHcnPNqkBBWw11D-7Pe12RBx/view?usp=drive_link"},

        { title: "REGRESSION ANALYSIS FOR TRAVEL COMPANY 'PORTTRAVEL'",
        description: "Data cleaning, exploratory data analysis, regression modeling , statistical analysis, prediction modeling, and data-driven recommendations.",
        link:"https://drive.google.com/file/d/1LN9WWxyUuIcnypYywGJej9k42RO8bas2/view?usp=drive_link"},

        { title: "CAUSAL EFFECT OF A COUNTRY'S HDI ON TOTAL RECOVERED COVID-19 CASES",
        description: "Causal inference, propensity score matching (CBGPS), multiple imputation, statistical modeling, exploratory data analysis, missing data analysis, and R programming.",
        link:"https://drive.google.com/file/d/18oetnT8PBF-Vngoy1ob-OxpVDTt3366I/view?usp=drive_link"},

        { title: "CAUSAL EFFECT OF MARITAL STATUS ON TOTAL CREDIT CARD SPENDING",
        description: "Causal inference, propensity score analysis, regression modeling, exploratory data analysis, missing data handling, and R programming.",
        link:"https://drive.google.com/file/d/1Klntxr8wM0PRGb_-nLP6xyZiJyXyWtl4/view?usp=drive_link"},

        { title: "CONTINUOUS SAMPLE SURVERY OF POPULATION (CSSP) REDESIGN BREIFING NOTES",
        description: "Survey design, stratified sampling, probability sampling, principal component analysis (PCA), statistical weighting, population estimation, geographic data analysis, and survey implementation planning. Applied statistical methods to redesign a national household survey for labor force data collection.",
        link:"https://drive.google.com/file/d/12fKmj1NoAnu9PllGGSkU2iNZibgVs2XD/view?usp=drive_link"},
    
        { title: "COVID-19 TRACKING AND TRACING USING POSTGRESQL",
        description: "Database design, PostgreSQL, SQL query development, data modeling, data insertion, and query optimization. Implemented joins, aggregations, and filtering for COVID-19 tracking. Compared SQL and NoSQL databases, discussing scalability, schema flexibility, and real-world application of database management systems.",
        link:"https://drive.google.com/file/d/1LksAEpN2-j6tEPatcgri8ClaMzlnVHjx/view?usp=drive_link"},

        { title: "BUSINESS INTELLIGENCE REPORT FOR 'TIOR' GAMING",
        description: "Business Intelligence, SQL OLAP analysis, Merchandise profitability analysis, Promotion cost-revenue analysis, Data warehouse design, Dashboard and Storyboard Visualization, Forecasting, Efficiency Analysis, Industry Reports",
        link:"https://drive.google.com/file/d/14Rhtj4-e1H1hFBezZM5a7Cy-nIKDjBbD/view?usp=drive_link"}
    
    ];

const container = document.getElementById("project-holder"); 

boxData.forEach(item => {
    const box = document.createElement("div"); 
    box.classList.add("box");

    box.innerHTML = `
        <h3>${item.title}</h3>
        <a class="links" href=${item.link} target="_blank" rel="noopener noreferrer">🔗</a>
        <p class="description">${item.description}</p>`

        box.addEventListener("click", () => {
            box.classList.toggle("expanded"); 
        });

        container.appendChild(box); 

    });