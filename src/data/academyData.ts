export interface ProgramItem {
  id: string;
  name: string;
  category: 'school' | 'board' | 'cadet' | 'cambridge' | 'exam';
  summary: string;
  focus: string[];
  format: string;
  badge?: string;
}

export interface SubjectItem {
  name: string;
  description: string;
  topics: string[];
  isEditable?: boolean;
}

export interface StrengthItem {
  title: string;
  text: string;
}

export interface PrincipleItem {
  key: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface LearningStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ResourceListing {
  id: string;
  title: string;
  category: 'Notes' | 'Practice Papers' | 'Guess Papers' | 'Revision Material' | 'Tests' | 'Important Questions';
  board: string;
  classLevel: string;
  subject: string;
  fileSize: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const ACADEMY_CONFIG = {
  name: 'The Leads Academy',
  tagline: 'Building Strong Foundations. Preparing Students for What Comes Next.',
  address: 'F-8/1, Johar Road, Islamabad, Pakistan',
  specificAddress: 'House 2-A, Street 47, Johar Road, F-8/1, Islamabad',
  city: 'Islamabad',
  phoneDisplay: '0309-7153253',
  phoneTel: '+923097153253',
  whatsappNumber: '923097153253',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Leads+Academy+F-8%2F1+Johar+Road+Islamabad',
  directionsQuery: 'House 2-A, Street 47, Johar Road, F-8/1, Islamabad',
  email: 'info@leadsacademy.pk',
  hours: 'Monday – Saturday: 9:00 AM – 8:30 PM (Sunday Mock Tests)',
};

export const CORE_PROGRAMS: ProgramItem[] = [
  {
    id: 'middle',
    name: 'Middle School',
    category: 'school',
    badge: 'Foundation',
    summary: 'Foundation building for younger students: clear concepts, steady practice, and study habits that make later board classes significantly easier.',
    focus: ['Mathematics', 'General Science', 'English Grammar & Reading', 'Urdu'],
    format: 'Concept lessons, guided daily practice, weekly tests, and active doubt clearing.'
  },
  {
    id: 'secondary',
    name: 'Secondary School',
    category: 'school',
    badge: 'Core Secondary',
    summary: 'Structured support through the secondary years, connecting classroom topics to consistent practice, diagrammatic presentation, and systematic revision.',
    focus: ['Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'English'],
    format: 'Topic-wise teaching, structured practice sets, unit assessments, and revision cycles.'
  },
  {
    id: 'ninth',
    name: '9th Grade',
    category: 'board',
    badge: 'FBISE SSC-I',
    summary: 'A steady, disciplined start to the board-level syllabus, establishing concept clarity first and regular practice as the academic workload increases.',
    focus: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science / Biology', 'English', 'Islamiat'],
    format: 'SLO-based lessons, guided numericals, weekly board-pattern tests, and error review.'
  },
  {
    id: 'tenth',
    name: '10th Grade',
    category: 'board',
    badge: 'FBISE SSC-II',
    summary: 'Focused preparation for the critical board examination year: completing the syllabus early, working through past papers, and structured revision.',
    focus: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science / Biology', 'English', 'Pak Studies'],
    format: 'Syllabus completion, past paper drills, full-length pre-board send-up exams, and targeted revision.'
  },
  {
    id: 'federal',
    name: 'Federal Board Preparation (FBISE)',
    category: 'board',
    badge: 'FBISE 9th – 12th',
    summary: 'Preparation tailored specifically for students appearing in Federal Board examinations, built around the SLO syllabus model and how papers are set.',
    focus: ['Matric (9th & 10th)', 'F.Sc Pre-Medical', 'F.Sc Pre-Engineering', 'ICS (Computer Science)'],
    format: 'Board paper-style practice, timed tests, model paper solutions, and examiners mark scheme training.'
  },
  {
    id: 'examination',
    name: 'Examination Preparation & Crash Batches',
    category: 'exam',
    badge: 'Intensive Prep',
    summary: 'Short, focused preparation ahead of upcoming examinations: revision plans, topical test series, practice papers, and detailed feedback on mistakes.',
    focus: ['Annual Board Exams', 'FBISE Supplementary Exams', 'Improvement Batches', 'Entry Tests'],
    format: 'Rapid revision modules, timed past paper tests, error review & analysis, and high-yield questions.'
  },
  {
    id: 'cadet',
    name: 'Cadet & Military College Preparation',
    category: 'cadet',
    badge: 'Specialized Track',
    summary: 'Dedicated coaching for entry tests of Cadet and Military colleges (Class 4th to 8th entry), covering syllabus mastery, speed solving, and interview orientation.',
    focus: ['Mathematics (Mental Math & Word Problems)', 'English Composition & Vocab', 'General Science', 'Urdu', 'Intelligence (IQ) Drills'],
    format: '10-year past paper drills, weekly timed entrance simulations, and interview guidance.'
  },
  {
    id: 'cambridge',
    name: 'Cambridge O Level & A Level',
    category: 'cambridge',
    badge: 'CAIE / Edexcel',
    summary: 'Analytical, syllabus-precise coaching for Cambridge candidates with topical past paper variants, examiner report reviews, and mark scheme discipline.',
    focus: ['Mathematics (Syllabus D & Add-Math)', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English Language'],
    format: 'Paper 1 (MCQ), Paper 2 (Theory), and ATP workshops with veteran Cambridge specialist tutors.'
  }
];

export const SUBJECTS_LIST: SubjectItem[] = [
  {
    name: 'Mathematics',
    description: 'Build strong conceptual understanding through guided practice, problem solving, and regular revision. Topics are broken down step-by-step so students understand mathematical reasoning rather than memorizing formula steps.',
    topics: ['Algebra & Linear Equations', 'Trigonometry & Geometry', 'Matrices & Determinants', 'Calculus & Functions', 'Statistics & Probability']
  },
  {
    name: 'Physics',
    description: 'Connect laws and formulas to everyday situations, then strengthen them with numerical practice, structured derivations, and clear diagrammatic presentation aligned with board marks.',
    topics: ['Mechanics & Motion', 'Waves & Sound', 'Thermal Physics', 'Electricity & Magnetism', 'Atomic & Nuclear Physics']
  },
  {
    name: 'Chemistry',
    description: 'Understand reactions, equations, and the periodic table through clear explanation, regular practice, and recall. Special emphasis on chemical bonding, stoichiometry, and organic mechanisms.',
    topics: ['Atomic Structure & Periodic Trends', 'Chemical Bonding', 'Physical Chemistry & Gas Laws', 'Organic Chemistry & Hydrocarbons', 'Industrial Chemistry']
  },
  {
    name: 'Computer Science',
    description: 'Develop logical thinking and problem-solving skills alongside the theory needed for board and Cambridge examinations, covering algorithm design, flowcharts, and syntax fluency.',
    topics: ['Computer Architecture', 'Data Representation & Logic Gates', 'Programming Fundamentals (C++ / Python)', 'Database Concepts', 'Networks & Cybersecurity']
  },
  {
    name: 'English',
    description: 'Strengthen reading comprehension, formal essay writing, grammar mechanics, and vocabulary so students can express their ideas clearly and score top marks in board papers.',
    topics: ['Grammar & Sentence Synthesis', 'Essay & Letter Composition', 'Comprehension & Summary Writing', 'Direct & Indirect Speech', 'Vocabulary Expansion']
  },
  {
    name: 'Biology & Other Subjects',
    description: 'Additional subjects including Biology, Pakistan Studies, Islamiyat, and specialized entry test subjects are available. Enquire directly with the academy for current batch openings.',
    topics: ['Cell Biology & Genetics', 'Human Physiology', 'Ecology & Evolution', 'Pakistan Studies', 'Islamiyat Compulsory'],
    isEditable: true
  }
];

export const WHY_LEADS_PRINCIPLES: PrincipleItem[] = [
  {
    key: 'concept',
    title: 'Concept First',
    subtitle: 'Understanding before memorization',
    description: 'Students understand the core principles, derivations, and why a method works before they are asked to memorize formulas or answers.'
  },
  {
    key: 'practice',
    title: 'Structured Practice',
    subtitle: 'Consistent, guided problem solving',
    description: 'Steady, guided practice turns conceptual comprehension into fluent execution. Problems progress logically from basic to board-level challenges.'
  },
  {
    key: 'testing',
    title: 'Regular Testing',
    subtitle: 'Early identification of knowledge gaps',
    description: 'Frequent chapter-wise and cumulative tests show what has been understood and what needs work, catching weaknesses long before final exams.'
  },
  {
    key: 'revision',
    title: 'Focused Revision',
    subtitle: 'Systematic pre-exam consolidation',
    description: 'Planned review cycles ensure earlier topics remain fresh in memory. Formula sheets, summaries, and mindmaps streamline final revision.'
  },
  {
    key: 'exam',
    title: 'Exam-Oriented Preparation',
    subtitle: 'Aligned with board & test patterns',
    description: 'Preparation is specifically calibrated to Federal Board (FBISE), Cambridge, or Cadet College formats, teaching students how marks are awarded.'
  },
  {
    key: 'supportive',
    title: 'Supportive Environment',
    subtitle: 'A focused place to ask questions',
    description: 'A disciplined, calm academic setting where students feel comfortable asking questions, clearing doubts, and taking their studies seriously.'
  }
];

export const LEARNING_CYCLE: LearningStep[] = [
  {
    step: '1',
    title: 'Learn',
    tagline: 'Concept clarity first',
    description: 'Each topic begins with the core concept. Students understand the principles and real-world logic before tackling complex problems.'
  },
  {
    step: '2',
    title: 'Practice',
    tagline: 'Guided and independent drills',
    description: 'Classroom exercises and structured homework transition understanding into fluency. Questions build gradually to build genuine confidence.'
  },
  {
    step: '3',
    title: 'Test',
    tagline: 'Frequent assessment',
    description: 'Regular timed tests reveal gaps under exam conditions. Students learn time management and presentation according to board marking schemes.'
  },
  {
    step: '4',
    title: 'Improve',
    tagline: 'Targeted feedback & revision',
    description: 'Marked papers are thoroughly reviewed. Errors are identified, weak areas are re-explained, and the cycle feeds continuously into stronger learning.'
  }
];

export const KEY_STRENGTHS: StrengthItem[] = [
  {
    title: 'Focused Academic Environment',
    text: 'A calm, disciplined setting in F-8/1 Islamabad where studying and academic progress remain the central priority.'
  },
  {
    title: 'Individual Student Attention',
    text: 'Small class batches allow teachers to identify each student’s specific bottlenecks and provide customized guidance.'
  },
  {
    title: 'Structured Syllabus Progression',
    text: 'Topics follow an organized, timely schedule so that the full syllabus is completed well ahead of the final examinations.'
  },
  {
    title: 'Rigorous Exam Revision',
    text: 'Systematic revision plans, solved past papers, and mock send-up examinations simulate the actual exam hall experience.'
  }
];

export const SAMPLE_RESOURCES: ResourceListing[] = [
  {
    id: 'res-1',
    title: 'Class 10 Physics — Comprehensive Chapter Notes & Numericals',
    category: 'Notes',
    board: 'Federal Board (FBISE)',
    classLevel: 'Class 10',
    subject: 'Physics',
    fileSize: '2.4 MB PDF'
  },
  {
    id: 'res-2',
    title: 'Class 10 Chemistry — Full Syllabus Practice Paper with Solutions',
    category: 'Practice Papers',
    board: 'Federal Board (FBISE)',
    classLevel: 'Class 10',
    subject: 'Chemistry',
    fileSize: '1.8 MB PDF'
  },
  {
    id: 'res-3',
    title: 'Class 10 English — Model Guess Paper & Essay Structures',
    category: 'Guess Papers',
    board: 'Federal Board (FBISE)',
    classLevel: 'Class 10',
    subject: 'English',
    fileSize: '1.2 MB PDF'
  },
  {
    id: 'res-4',
    title: 'Class 10 Mathematics — Formula Sheet & Rapid Revision Material',
    category: 'Revision Material',
    board: 'Federal Board (FBISE)',
    classLevel: 'Class 10',
    subject: 'Mathematics',
    fileSize: '3.1 MB PDF'
  },
  {
    id: 'res-5',
    title: 'Class 9 Computer Science — Unit-wise Chapter Assessment Test',
    category: 'Tests',
    board: 'Federal Board (FBISE)',
    classLevel: 'Class 9',
    subject: 'Computer Science',
    fileSize: '1.5 MB PDF'
  },
  {
    id: 'res-6',
    title: 'Class 10 Physics — High-Frequency Board Questions & Solutions',
    category: 'Important Questions',
    board: 'Federal Board (FBISE)',
    classLevel: 'Class 10',
    subject: 'Physics',
    fileSize: '2.0 MB PDF'
  },
  {
    id: 'res-7',
    title: 'Cadet College Entry Test — Mathematics & Intelligence Practice Set',
    category: 'Practice Papers',
    board: 'Cadet & Military Colleges',
    classLevel: 'Class 7 & 8 Entry',
    subject: 'Mathematics & IQ',
    fileSize: '2.8 MB PDF'
  },
  {
    id: 'res-8',
    title: 'Cambridge O Level Mathematics — Topical Past Paper Exam Pack',
    category: 'Revision Material',
    board: 'Cambridge (CAIE)',
    classLevel: 'O Level',
    subject: 'Mathematics',
    fileSize: '4.2 MB PDF'
  }
];

export const DEMO_ACHIEVEMENTS = [
  {
    type: 'Academic Excellence',
    title: 'Federal Board (FBISE) Board Examinations',
    description: 'Structured preparation helping students achieve top grades through concept clarity, past paper drills, and board send-up exams.',
    fields: [
      { label: 'Academic Stream', placeholder: 'Matric & F.Sc (Pre-Medical / Pre-Engineering / ICS)' },
      { label: 'Key Focus', placeholder: 'SLO-based numericals, conceptual physics, and chemistry equations' },
      { label: 'Preparation Model', placeholder: 'Weekly chapter assessments + 3-hour pre-board simulations' }
    ]
  },
  {
    type: 'Entrance Qualification',
    title: 'Cadet & Military College Admissions',
    description: 'Specialized entrance coaching for Class 4th to 8th students appearing for Military College Jhelum, PAF Sargodha, and Hasanabdal.',
    fields: [
      { label: 'Target Institutions', placeholder: 'Military College Jhelum, PAF College Sargodha, Hasanabdal' },
      { label: 'Syllabus Coverage', placeholder: 'Math, English Composition, General Science, Urdu & IQ Drills' },
      { label: 'Evaluation', placeholder: 'Full-length timed entrance papers & interview grooming' }
    ]
  },
  {
    type: 'International Curriculum',
    title: 'Cambridge O Level & A Level Preparation',
    description: 'Targeted preparation for CAIE and Edexcel examinations focusing on past paper variants, examiner reports, and mark scheme criteria.',
    fields: [
      { label: 'Key Subjects', placeholder: 'Syllabus D Math, Physics (5054/9702), Chemistry, Biology' },
      { label: 'Exam Technique', placeholder: 'MCQ Paper 1, Theory Paper 2, and ATP practical training' },
      { label: 'Tutor Guidance', placeholder: 'Experienced Cambridge specialist faculty' }
    ]
  }
];

export const DEMO_FACULTY = [
  {
    role: 'Senior Faculty',
    specialty: 'Mathematics Specialist',
    bio: 'Over 12 years of experience teaching Federal Board and Cambridge curricula. Focuses on structured problem solving, step-by-step algebra, and examination presentation.',
    subjects: 'Mathematics · Additional Mathematics'
  },
  {
    role: 'Senior Faculty',
    specialty: 'Physics Specialist',
    bio: 'Dedicated to conceptual physics, practical numerical applications, and derivations. Guides students through FBISE SLO-pattern questions with clarity.',
    subjects: 'Physics · Applied Sciences'
  },
  {
    role: 'Senior Faculty',
    specialty: 'Chemistry Specialist',
    bio: 'Specializes in chemical equations, molecular bonding, and organic reaction pathways. Emphasizes visual memory aids and regular testing.',
    subjects: 'Chemistry · Science Foundations'
  },
  {
    role: 'Senior Faculty',
    specialty: 'English & Humanities Faculty',
    bio: 'Guides students in analytical reading, precise grammar syntax, and structured essay composition for board and Cambridge examinations.',
    subjects: 'English Language · Grammar & Composition'
  }
];

export const DEMO_TESTIMONIALS = [
  {
    tag: 'Parent Review',
    quote: 'The regular testing and feedback helped our child understand exactly where marks were slipping. The disciplined environment and individual guidance made a noticeable difference in their board results.',
    author: 'Tariq Mehmood',
    subtitle: 'Parent of Class 10 Federal Board Student, F-8 Islamabad'
  },
  {
    tag: 'Student Feedback',
    quote: 'Concepts that felt confusing in school became straightforward here because the teacher took the time to explain the foundation before moving to exercises. The past paper sessions were invaluable.',
    author: 'Hamza Farooq',
    subtitle: 'Cambridge O Level Student · Mathematics & Physics'
  },
  {
    tag: 'Parent Review',
    quote: 'We appreciated the direct communication regarding attendance and test scores. The revision before final exams gave our student genuine confidence in tackling board papers.',
    author: 'Dr. Ayesha Rehman',
    subtitle: 'Parent of F.Sc Pre-Medical Student, Islamabad'
  }
];

export const AUTHENTIC_FAQS: FaqItem[] = [
  {
    question: 'Which classes does The Leads Academy offer?',
    answer: 'The academy offers coaching for Middle School, Secondary School, 9th Grade, 10th Grade, Federal Board Preparation (FBISE Matric & F.Sc), Cambridge O/A Levels, and specialized Cadet College entrance preparation. Current batch openings are confirmed directly with the academy.'
  },
  {
    question: 'Which subjects are available?',
    answer: 'Core subjects include Mathematics, Physics, Chemistry, Computer Science, Biology, and English. Additional subjects and individual subject-coaching packages are also available upon request.'
  },
  {
    question: 'Where is the academy located?',
    answer: 'The Leads Academy is located at F-8/1, Johar Road (House 2-A, Street 47), Islamabad, Pakistan, just minutes from F-8 Markaz. The Contact page includes a direct Google Maps button for accurate navigation.'
  },
  {
    question: 'How can I enquire about admissions?',
    answer: 'You can submit the online enquiry form on the Admissions page, call 0309-7153253 directly, or message the academy on WhatsApp for immediate details on fee structures, batch schedules, and seat availability.'
  },
  {
    question: 'Do you provide examination preparation?',
    answer: 'Yes. Examination preparation is integral to the academy’s teaching approach, featuring timed past paper practice, board-pattern test series, revision summaries, and detailed analysis of marked errors.'
  },
  {
    question: 'Are regular tests conducted?',
    answer: 'Yes. Regular testing is conducted through chapter-wise quizzes, monthly assessments, and full pre-board send-up examinations. Each test is marked with detailed feedback so students know exactly how to improve.'
  },
  {
    question: 'What are the fees and class timings?',
    answer: 'Fees and timings depend on the selected class, subjects, and batch format (morning/evening or on-campus/home tuition). Please contact the academy directly at 0309-7153253 to confirm current fee schedules.'
  },
  {
    question: 'How can parents contact the academy?',
    answer: 'Parents can call 0309-7153253, send a message on WhatsApp, use the website enquiry form, or visit the academy in person at F-8/1, Johar Road during daily operating hours.'
  }
];
