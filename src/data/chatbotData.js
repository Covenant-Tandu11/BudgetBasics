const chatbotData = [
    // Budgeting
    {
        id: 1,
        category: "Budgeting",
        question: "What is a budget?",
        answer:
            "A budget is a plan for how you will use your money over a specific period. It helps you understand what comes in, what goes out, and how much you can save."
    },
    {
        id: 2,
        category: "Budgeting",
        question: "How do I create a budget?",
        answer:
            "Start by listing your income, then list your regular expenses. Separate your needs from your wants, set a savings amount, and make sure your planned spending does not exceed your income."
    },
    {
        id: 3,
        category: "Budgeting",
        question: "How should I divide my paycheck?",
        answer:
            "Start by covering essential expenses, then set aside money for savings and other financial goals. Use whatever remains for non-essential spending. The exact amounts depend on your income and expenses."
    },
    {
        id: 4,
        category: "Budgeting",
        question: "How do I budget irregular income?",
        answer:
            "When your income changes from week to week or month to month, build your budget around your essential expenses first. During higher-income periods, consider putting some extra money toward savings."
    },
    {
        id: 5,
        category: "Budgeting",
        question: "How much should I spend on needs?",
        answer:
            "There is no single percentage that works for everyone. Start by identifying essential costs such as food, transportation, housing, and school expenses, then compare their total with your income."
    },

    // Saving
    {
        id: 6,
        category: "Saving",
        question: "How can I start saving money?",
        answer:
            "Choose a realistic amount that you can save regularly, even if it is small. Set the money aside before spending on non-essential things and increase the amount when your income allows."
    },
    {
        id: 7,
        category: "Saving",
        question: "How can I save my first $500?",
        answer:
            "Set a target and divide it into smaller milestones. For example, saving $25 at a time means reaching $500 after 20 contributions. Adjust the amount and frequency to fit your income."
    },
    {
        id: 8,
        category: "Saving",
        question: "What is an emergency fund?",
        answer:
            "An emergency fund is money set aside for unexpected essential expenses, such as an urgent repair or an unexpected bill. It can help you avoid relying entirely on borrowed money when something unexpected happens."
    },
    {
        id: 9,
        category: "Saving",
        question: "How much should I save each month?",
        answer:
            "There is no universal amount. Choose a savings target that fits your income and necessary expenses. Consistency matters, so start with an amount you can realistically maintain."
    },
    {
        id: 10,
        category: "Saving",
        question: "Where should I keep my savings?",
        answer:
            "For short-term savings, consider an appropriate savings account or another secure, accessible option available in your country. Compare fees, access, and any applicable interest before choosing."
    },

    // Needs and Wants
    {
        id: 11,
        category: "Needs vs Wants",
        question: "What is a need versus a want?",
        answer:
            "A need is something essential for your basic living, education, or responsibilities. A want is something that can improve your experience but is not essential."
    },
    {
        id: 12,
        category: "Needs vs Wants",
        question: "How do I know if something is a need or a want?",
        answer:
            "Ask yourself whether you can safely live or complete your responsibility without it. If you can postpone the purchase without causing a serious problem, it may be a want rather than a need."
    },
    {
        id: 13,
        category: "Needs vs Wants",
        question: "How can I control impulse spending?",
        answer:
            "Give yourself time before making non-essential purchases. Add the item to a list, compare it with your budget, and ask whether buying it supports your current financial goals."
    },
    {
        id: 14,
        category: "Needs vs Wants",
        question: "Should I buy something I really want?",
        answer:
            "Check your budget first. If your essential expenses and savings goals are covered and you can afford the purchase without creating financial problems, you can decide whether it is worth the cost."
    },

    // Expenses
    {
        id: 15,
        category: "Expenses",
        question: "How do I track my expenses?",
        answer:
            "Record what you spend throughout the day or week. Group your expenses into categories such as food, transportation, school, entertainment, and other spending, then compare the totals with your budget."
    },
    {
        id: 16,
        category: "Expenses",
        question: "How can I reduce unnecessary spending?",
        answer:
            "Review your recent expenses and identify purchases that are not essential. Look for subscriptions, frequent small purchases, or habits that could be reduced or replaced with cheaper alternatives."
    },
    {
        id: 17,
        category: "Expenses",
        question: "Why should I track my spending?",
        answer:
            "Tracking your spending shows where your money is actually going. This can help you identify patterns, stay within your budget, and make better decisions about future spending."
    },
    {
        id: 18,
        category: "Expenses",
        question: "What are fixed and variable expenses?",
        answer:
            "Fixed expenses usually stay similar from one period to another, such as a regular subscription or payment. Variable expenses can change, such as food, transportation, or entertainment."
    },

    // Student Finances
    {
        id: 19,
        category: "Student Finances",
        question: "How should I budget my student allowance?",
        answer:
            "Start with your essential student expenses such as food, transportation, school materials, and communication. Then set aside a portion for savings and use the remaining amount for optional spending."
    },
    {
        id: 20,
        category: "Student Finances",
        question: "How do I manage a work-study paycheck?",
        answer:
            "First identify your essential expenses and upcoming school costs. Then decide how much you want to save and set a limit for discretionary spending."
    },
    {
        id: 21,
        category: "Student Finances",
        question: "How should I budget for transportation?",
        answer:
            "Look at how much you normally spend on transportation over a week or month. Use that information to create a realistic transportation budget and include a small amount for unexpected trips when possible."
    },
    {
        id: 22,
        category: "Student Finances",
        question: "How can I manage food expenses as a student?",
        answer:
            "Plan your meals when possible, compare prices, and keep track of how much you spend on food. A simple weekly food budget can make it easier to avoid unexpected spending."
    },

    // Financial Goals
    {
        id: 23,
        category: "Financial Goals",
        question: "How do I set a financial goal?",
        answer:
            "Make the goal specific and give it a target amount and timeframe. Then break the target into smaller amounts that you can save regularly."
    },
    {
        id: 24,
        category: "Financial Goals",
        question: "What is a short-term financial goal?",
        answer:
            "A short-term financial goal is something you plan to achieve relatively soon, such as saving for school materials, an upcoming expense, or building your initial emergency savings."
    },
    {
        id: 25,
        category: "Financial Goals",
        question: "What is a long-term financial goal?",
        answer:
            "A long-term financial goal is something that may take several years to achieve, such as saving for higher education, a major purchase, or another future financial priority."
    },
    {
        id: 26,
        category: "Financial Goals",
        question: "How do I stay motivated to save?",
        answer:
            "Keep your goal visible, break it into smaller milestones, and track your progress. Celebrating progress can help you stay consistent without changing the larger goal."
    },

    // Financial Basics
    {
        id: 27,
        category: "Financial Basics",
        question: "What is financial literacy?",
        answer:
            "Financial literacy is the ability to understand and use basic financial knowledge to make informed decisions about money, such as budgeting, saving, spending, and managing financial risks."
    },
    {
        id: 28,
        category: "Financial Basics",
        question: "Why is budgeting important?",
        answer:
            "Budgeting gives you a clearer picture of your income and expenses. It can help you plan ahead, avoid unnecessary spending, and work toward financial goals."
    },
    {
        id: 29,
        category: "Financial Basics",
        question: "What is an income?",
        answer:
            "Income is money you receive. For a student, this could include an allowance, wages from a job, or other legitimate sources of money."
    },
    {
        id: 30,
        category: "Financial Basics",
        question: "What is an expense?",
        answer:
            "An expense is money you spend on something. Examples include food, transportation, school supplies, bills, entertainment, and other purchases."
    }
];

export default chatbotData;