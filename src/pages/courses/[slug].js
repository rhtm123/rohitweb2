import Link from "next/link"
import { notFound } from "next/navigation"
import {
  FaPython,
  FaJs,
  FaReact,
  FaChartBar,
  FaClock,
  FaUsers,
  FaStar,
  FaCheck,
  FaArrowLeft,
  FaPlay,
  FaDownload,
  FaCertificate,
} from "react-icons/fa"
import { SiDjango, SiNextdotjs } from "react-icons/si"

import WhatsAppContact from "@/components/WhatsApp"

const coursesData = {
  "python-fundamentals": {
    title: "Python Fundamentals",
    description:
      "Master Python programming from basics to advanced concepts with hands-on projects and real-world applications.",
    icon: "FaPython",
    duration: "8 weeks",
    level: "Beginner",
    students: 150,
    rating: 4.9,
    price: "₹9,999",
    color: "bg-yellow-500",
    overview:
      "This comprehensive Python course takes you from complete beginner to confident programmer. You'll learn core programming concepts, data structures, and object-oriented programming while building practical projects.",
    whatYouLearn: [
      "Python syntax and fundamental programming concepts",
      "Data types, variables, and operators",
      "Control structures (if/else, loops)",
      "Functions and modules",
      "Object-oriented programming principles",
      "File handling and data processing",
      "Error handling and debugging",
      "Working with libraries and packages",
    ],
    curriculum: [
      {
        week: 1,
        title: "Getting Started with Python",
        topics: ["Installation & Setup", "Python Syntax", "Variables & Data Types", "Basic Operations"],
      },
      {
        week: 2,
        title: "Control Structures",
        topics: ["Conditional Statements", "Loops", "Break & Continue", "Nested Structures"],
      },
      {
        week: 3,
        title: "Data Structures",
        topics: ["Lists", "Tuples", "Dictionaries", "Sets", "String Manipulation"],
      },
      {
        week: 4,
        title: "Functions",
        topics: ["Function Definition", "Parameters & Arguments", "Return Values", "Scope"],
      },
      {
        week: 5,
        title: "Object-Oriented Programming",
        topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation"],
      },
      {
        week: 6,
        title: "File Handling",
        topics: ["Reading Files", "Writing Files", "CSV Processing", "JSON Handling"],
      },
      {
        week: 7,
        title: "Error Handling & Debugging",
        topics: ["Try/Except", "Custom Exceptions", "Debugging Techniques", "Testing"],
      },
      {
        week: 8,
        title: "Final Project",
        topics: ["Project Planning", "Implementation", "Code Review", "Presentation"],
      },
    ],
    prerequisites: ["Basic computer skills", "No programming experience required"],
    includes: ["Video lectures", "Coding exercises", "Projects", "Certificate of completion", "Lifetime access"],
  },
  "javascript-mastery": {
    title: "JavaScript Mastery",
    description:
      "Complete JavaScript course covering ES6+ features and modern development practices for web applications.",
    icon: "FaJs",
    duration: "8 weeks",
    level: "Intermediate",
    students: 200,
    rating: 4.8,
    price: "₹9,999",
    color: "bg-yellow-400",
    overview:
      "Dive deep into JavaScript and learn modern ES6+ features, asynchronous programming, and how to build interactive web applications. Perfect for those with basic programming knowledge.",
    whatYouLearn: [
      "Modern JavaScript (ES6+) features",
      "DOM manipulation and event handling",
      "Asynchronous programming with Promises and async/await",
      "Working with APIs and fetch",
      "JavaScript modules and bundling",
      "Error handling and debugging",
      "Testing JavaScript applications",
      "Performance optimization techniques",
    ],
    curriculum: [
      {
        week: 1,
        title: "JavaScript Fundamentals Review",
        topics: ["Variables & Scope", "Functions", "Objects & Arrays", "This Keyword"],
      },
      {
        week: 2,
        title: "ES6+ Features",
        topics: ["Arrow Functions", "Template Literals", "Destructuring", "Spread/Rest"],
      },
      {
        week: 3,
        title: "Advanced Functions",
        topics: ["Closures", "Higher-Order Functions", "Callbacks", "Function Composition"],
      },
      {
        week: 4,
        title: "DOM Manipulation",
        topics: ["Selecting Elements", "Event Handling", "Dynamic Content", "Form Validation"],
      },
      {
        week: 5,
        title: "Asynchronous JavaScript",
        topics: ["Callbacks", "Promises", "Async/Await", "Error Handling"],
      },
      {
        week: 6,
        title: "Working with APIs",
        topics: ["Fetch API", "REST APIs", "JSON Processing", "Error Handling"],
      },
      {
        week: 7,
        title: "Modern JavaScript Tools",
        topics: ["Modules", "Webpack Basics", "NPM", "Babel"],
      },
      {
        week: 8,
        title: "Testing & Debugging",
        topics: ["Unit Testing", "Debugging Tools", "Performance", "Best Practices"],
      },
      {
        week: 9,
        title: "Project Development",
        topics: ["Planning", "Implementation", "Code Review", "Optimization"],
      },
      {
        week: 10,
        title: "Final Project & Deployment",
        topics: ["Project Completion", "Deployment", "Portfolio", "Next Steps"],
      },
    ],
    prerequisites: ["Basic programming knowledge", "HTML/CSS fundamentals"],
    includes: ["Video lectures", "Interactive coding exercises", "Real-world projects", "Code reviews", "Certificate"],
  },
  "react-development": {
    title: "React Development",
    description:
      "Build modern, interactive web applications using React and its powerful ecosystem of tools and libraries.",
    icon: "FaReact",
    duration: "8 weeks",
    level: "Intermediate",
    students: 180,
    rating: 4.9,
    price: "₹9,999",
    color: "bg-blue-500",
    overview:
      "Master React development from components to complex state management. Learn to build scalable, maintainable applications using modern React patterns and best practices.",
    whatYouLearn: [
      "React components and JSX",
      "State management with hooks",
      "Component lifecycle and effects",
      "Routing with React Router",
      "Form handling and validation",
      "API integration and data fetching",
      "Testing React applications",
      "Performance optimization",
    ],
    curriculum: [
      {
        week: 1,
        title: "React Fundamentals",
        topics: ["Components", "JSX", "Props", "Virtual DOM"],
      },
      {
        week: 2,
        title: "State & Events",
        topics: ["useState Hook", "Event Handling", "Conditional Rendering", "Lists & Keys"],
      },
      {
        week: 3,
        title: "Component Lifecycle",
        topics: ["useEffect Hook", "Cleanup", "Dependencies", "Custom Hooks"],
      },
      {
        week: 4,
        title: "Advanced Hooks",
        topics: ["useContext", "useReducer", "useMemo", "useCallback"],
      },
      {
        week: 5,
        title: "Routing",
        topics: ["React Router", "Navigation", "Route Parameters", "Protected Routes"],
      },
      {
        week: 6,
        title: "Forms & Validation",
        topics: ["Controlled Components", "Form Libraries", "Validation", "Error Handling"],
      },
      {
        week: 7,
        title: "API Integration",
        topics: ["Fetch Data", "Loading States", "Error Handling", "Custom Hooks"],
      },
      {
        week: 8,
        title: "State Management",
        topics: ["Context API", "Redux Basics", "Zustand", "State Patterns"],
      },
      {
        week: 9,
        title: "Testing",
        topics: ["Jest", "React Testing Library", "Component Testing", "Integration Tests"],
      },
      {
        week: 10,
        title: "Performance",
        topics: ["Optimization", "Code Splitting", "Lazy Loading", "Memoization"],
      },
      {
        week: 11,
        title: "Project Development",
        topics: ["Planning", "Architecture", "Implementation", "Best Practices"],
      },
      {
        week: 12,
        title: "Deployment & Portfolio",
        topics: ["Build Process", "Deployment", "Portfolio Project", "Career Guidance"],
      },
    ],
    prerequisites: ["JavaScript proficiency", "HTML/CSS knowledge", "Basic programming concepts"],
    includes: ["Comprehensive video content", "Hands-on projects", "Code reviews", "Career guidance", "Certificate"],
  },
  "django-backend": {
    title: "Django Backend Development",
    description:
      "Create powerful, scalable web applications using Django framework with database integration and API development.",
    icon: "SiDjango",
    duration: "8 weeks",
    level: "Intermediate",
    students: 120,
    rating: 4.7,
    price: "₹9,999",
    color: "bg-green-600",
    overview:
      "Learn to build robust backend systems with Django. Cover everything from basic web development to advanced topics like REST APIs, authentication, and deployment.",
    whatYouLearn: [
      "Django framework fundamentals",
      "Models, Views, and Templates (MVT)",
      "Database design and ORM",
      "User authentication and authorization",
      "REST API development",
      "Testing Django applications",
      "Security best practices",
      "Deployment and scaling",
    ],
    curriculum: [
      {
        week: 1,
        title: "Django Introduction",
        topics: ["Setup & Installation", "Project Structure", "MVT Pattern", "First App"],
      },
      {
        week: 2,
        title: "Models & Database",
        topics: ["Model Definition", "Migrations", "ORM Queries", "Admin Interface"],
      },
      {
        week: 3,
        title: "Views & URLs",
        topics: ["Function Views", "Class-Based Views", "URL Routing", "Request/Response"],
      },
      {
        week: 4,
        title: "Templates & Static Files",
        topics: ["Template System", "Template Inheritance", "Static Files", "Media Files"],
      },
      {
        week: 5,
        title: "Forms & Validation",
        topics: ["Django Forms", "Model Forms", "Validation", "CSRF Protection"],
      },
      {
        week: 6,
        title: "User Authentication",
        topics: ["User Model", "Login/Logout", "Registration", "Permissions"],
      },
      {
        week: 7,
        title: "REST APIs",
        topics: ["Django REST Framework", "Serializers", "ViewSets", "Authentication"],
      },
      {
        week: 8,
        title: "Testing & Security",
        topics: ["Unit Testing", "Integration Testing", "Security Best Practices", "HTTPS"],
      },
      {
        week: 9,
        title: "Advanced Topics",
        topics: ["Caching", "Signals", "Custom Commands", "Performance"],
      },
      {
        week: 10,
        title: "Deployment",
        topics: ["Production Setup", "Database Migration", "Static Files", "Monitoring"],
      },
    ],
    prerequisites: ["Python proficiency", "Basic web development knowledge", "Database concepts"],
    includes: ["Complete video course", "Real-world projects", "API documentation", "Deployment guide", "Certificate"],
  },
  "data-science": {
    title: "Data Science with Python",
    description:
      "Comprehensive data science course covering analysis, visualization, and machine learning with Python.",
    icon: "FaChartBar",
    duration: "12 weeks",
    level: "Advanced",
    students: 90,
    rating: 4.8,
    price: "₹19,999",
    color: "bg-purple-600",
    overview:
      "Transform raw data into actionable insights. Learn the complete data science pipeline from data collection to machine learning model deployment.",
    whatYouLearn: [
      "Data manipulation with Pandas and NumPy",
      "Data visualization with Matplotlib and Seaborn",
      "Statistical analysis and hypothesis testing",
      "Machine learning algorithms",
      "Feature engineering and selection",
      "Model evaluation and validation",
      "Deep learning basics",
      "Real-world project implementation",
    ],
    curriculum: [
      {
        week: 1,
        title: "Data Science Fundamentals",
        topics: ["Python for Data Science", "Jupyter Notebooks", "NumPy Basics", "Data Types"],
      },
      {
        week: 2,
        title: "Data Manipulation with Pandas",
        topics: ["DataFrames", "Data Cleaning", "Merging & Joining", "Grouping"],
      },
      {
        week: 3,
        title: "Data Visualization",
        topics: ["Matplotlib", "Seaborn", "Plotly", "Interactive Visualizations"],
      },
      {
        week: 4,
        title: "Exploratory Data Analysis",
        topics: ["Statistical Summaries", "Correlation Analysis", "Distribution Analysis", "Outlier Detection"],
      },
      {
        week: 5,
        title: "Statistics for Data Science",
        topics: ["Descriptive Statistics", "Probability", "Hypothesis Testing", "Confidence Intervals"],
      },
      {
        week: 6,
        title: "Machine Learning Introduction",
        topics: ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Model Selection"],
      },
      {
        week: 7,
        title: "Regression Analysis",
        topics: ["Linear Regression", "Polynomial Regression", "Regularization", "Model Evaluation"],
      },
      {
        week: 8,
        title: "Classification",
        topics: ["Logistic Regression", "Decision Trees", "Random Forest", "SVM"],
      },
      {
        week: 9,
        title: "Clustering & Dimensionality",
        topics: ["K-Means", "Hierarchical Clustering", "PCA", "t-SNE"],
      },
      {
        week: 10,
        title: "Feature Engineering",
        topics: ["Feature Selection", "Feature Creation", "Scaling", "Encoding"],
      },
      {
        week: 11,
        title: "Model Evaluation",
        topics: ["Cross-Validation", "Metrics", "Hyperparameter Tuning", "Bias-Variance"],
      },
      {
        week: 12,
        title: "Deep Learning Basics",
        topics: ["Neural Networks", "TensorFlow/Keras", "CNN Basics", "RNN Basics"],
      },
      {
        week: 13,
        title: "Capstone Project",
        topics: ["Project Planning", "Data Collection", "Analysis", "Model Building"],
      },
      {
        week: 14,
        title: "Project Presentation",
        topics: ["Results Analysis", "Visualization", "Presentation", "Portfolio"],
      },
    ],
    prerequisites: ["Strong Python knowledge", "Basic statistics", "Mathematical thinking"],
    includes: [
      "Comprehensive curriculum",
      "Real datasets",
      "Capstone project",
      "Career guidance",
      "Industry certificate",
    ],
  },
  "nextjs-fullstack": {
    title: "Next.js Full Stack Development",
    description: "Build modern full-stack applications with Next.js, covering both frontend and backend development.",
    icon: "SiNextdotjs",
    duration: "12 weeks",
    level: "Advanced",
    students: 85,
    rating: 4.9,
    price: "₹19,999",
    color: "bg-black",
    overview:
      "Master full-stack development with Next.js 14+. Learn App Router, Server Components, API Routes, database integration, and deployment strategies.",
    whatYouLearn: [
      "Next.js App Router and file-based routing",
      "Server and Client Components",
      "API Routes and Server Actions",
      "Database integration with Prisma",
      "Authentication with NextAuth",
      "Styling with Tailwind CSS",
      "Testing and optimization",
      "Deployment and production best practices",
    ],
    curriculum: [
      {
        week: 1,
        title: "Next.js Fundamentals",
        topics: ["App Router", "File-based Routing", "Pages & Layouts", "Navigation"],
      },
      {
        week: 2,
        title: "Server & Client Components",
        topics: ["RSC Architecture", "Hydration", "Use Client Directive", "Streaming"],
      },
      {
        week: 3,
        title: "Styling & UI",
        topics: ["Tailwind CSS", "CSS Modules", "Component Libraries", "Responsive Design"],
      },
      {
        week: 4,
        title: "Data Fetching",
        topics: ["Server-side Fetching", "Client-side Fetching", "Caching", "Loading States"],
      },
      {
        week: 5,
        title: "API Routes",
        topics: ["Route Handlers", "Request/Response", "Middleware", "Error Handling"],
      },
      {
        week: 6,
        title: "Database Integration",
        topics: ["Prisma Setup", "Schema Design", "CRUD Operations", "Migrations"],
      },
      {
        week: 7,
        title: "Server Actions",
        topics: ["Form Handling", "Mutations", "Revalidation", "Error Handling"],
      },
      {
        week: 8,
        title: "Authentication",
        topics: ["NextAuth.js", "Providers", "Sessions", "Protected Routes"],
      },
      {
        week: 9,
        title: "Advanced Features",
        topics: ["Metadata API", "Image Optimization", "Internationalization", "Analytics"],
      },
      {
        week: 10,
        title: "Testing & Quality",
        topics: ["Unit Testing", "Integration Testing", "E2E Testing", "Code Quality"],
      },
      {
        week: 11,
        title: "Performance & SEO",
        topics: ["Core Web Vitals", "SEO Optimization", "Performance Monitoring", "Caching"],
      },
      {
        week: 12,
        title: "Deployment & Production",
        topics: ["Vercel Deployment", "Environment Variables", "Monitoring", "Scaling"],
      },
    ],
    prerequisites: ["React proficiency", "JavaScript ES6+", "Basic backend concepts"],
    includes: [
      "Latest Next.js features",
      "Full-stack projects",
      "Production deployment",
      "Performance optimization",
      "Certificate",
    ],
  },
}

const iconMap = {
    FaPython: FaPython,
    FaJs: FaJs,
    FaReact: FaReact,
    FaChartBar: FaChartBar,
    FaClock: FaClock,
    FaUsers: FaUsers,
    FaStar: FaStar,
    FaCheck: FaCheck,
    FaArrowLeft: FaArrowLeft,
    FaPlay: FaPlay,
    FaDownload: FaDownload,
    FaCertificate: FaCertificate,
    SiDjango: SiDjango,
    SiNextdotjs: SiNextdotjs,
  }
  

export default function CoursePage( {course} ) {

  if (!course) {
    notFound()
  }


  const IconComponent = iconMap[course.icon];

  return (
    <div className="min-h-screen bg-base-100">


      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className={`w-20 h-20 ${course.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
              <IconComponent className="text-3xl text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl mb-6">{course.description}</p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <FaClock className="text-lg" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-lg" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-300" />
                <span>{course.rating} rating</span>
              </div>
              <div
                className={`badge badge-lg ${
                  course.level === "Beginner"
                    ? "badge-success"
                    : course.level === "Intermediate"
                      ? "badge-warning"
                      : "badge-error"
                }`}
              >
                {course.level}
              </div>
            </div>

            <div className="text-4xl font-bold mb-6">{course.price}</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <p className="text-lg leading-relaxed">{course.overview}</p>
            </section>

            {/* What You'll Learn */}
            <section>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheck className="text-success mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((week, index) => (
                  <div key={index} className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="curriculum-accordion" />
                    <div className="collapse-title text-xl font-medium">
                      Week {week.week}: {week.title}
                    </div>
                    <div className="collapse-content">
                      <ul className="list-disc list-inside space-y-2">
                        {week.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Course Info Card */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title mb-4">Course Information</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Course Includes</h4>
                    <ul className="space-y-2">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FaCheck className="text-success text-sm" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <WhatsAppContact />


            {/* Quick Actions */}
            {/* <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title mb-4">Quick Actions</h3>
                <div className="space-y-3">

                  <button className="btn btn-primary w-full">
                    <FaPlay className="mr-2" />
                    Preview Course
                  </button>
                  <button className="btn btn-outline w-full">
                    <FaDownload className="mr-2" />
                    Download Syllabus
                  </button>
                  <button className="btn btn-outline w-full">
                    <FaCertificate className="mr-2" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      
    </div>
  )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug} = context.params;
    const course = coursesData[slug]

    return { 
        props: { 
            course:course,
        } 
  
    }
  }