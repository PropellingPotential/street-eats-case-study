import React, { useState } from 'react';
import { ChevronRight, Check, X, RefreshCw, Award, MapPin, DollarSign, Users, Calendar, TrendingUp, MessageCircle } from 'lucide-react';

const FoodTruckCaseStudy = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const caseStudyStages = [
    {
      id: 0,
      title: "Welcome to Street Eats Food Truck Case Study",
      content: "Sarah Chen wants to start a fusion food truck business in St. Catharines, Ontario. Help her develop a successful market entry strategy by making key business decisions.",
      type: "intro",
      icon: <Award size={40} className="text-orange-500" />
    },
    {
      id: 1,
      title: "Location Strategy",
      content: "St. Catharines has designated food truck zones downtown, at the waterfront, and near Brock University. Where should Street Eats primarily operate?",
      type: "question",
      icon: <MapPin size={40} className="text-red-500" />,
      options: [
        { id: "a", text: "Fixed location with regular hours at the waterfront" },
        { id: "b", text: "Rotate between multiple locations based on day of week" },
        { id: "c", text: "Focus only on special events and festivals" },
        { id: "d", text: "Primarily target Brock University campus" }
      ],
      correctAnswer: "b",
      explanation: "Rotating between multiple locations allows Street Eats to test different markets, reach diverse customer segments, and build a broader customer base while learning which locations perform best. A fixed location limits exposure, while focusing only on events creates inconsistent revenue. The university location would miss the broader market and face seasonal fluctuations when students leave campus."
    },
    {
      id: 2,
      title: "Menu Development",
      content: "Sarah has developed various fusion recipes combining Asian and Canadian flavors. What menu strategy would be most effective for market entry?",
      type: "question",
      icon: <MessageCircle size={40} className="text-green-500" />,
      options: [
        { id: "a", text: "Extensive menu with 15+ different fusion options" },
        { id: "b", text: "Limited core menu (5-7 items) with weekly rotating specials" },
        { id: "c", text: "Copy popular items from existing food trucks but with Asian fusion twist" },
        { id: "d", text: "Different menu for each location to test all recipe options" }
      ],
      correctAnswer: "b",
      explanation: "A limited core menu with rotating specials balances operational efficiency with variety. This approach keeps food costs manageable, reduces waste, ensures consistent quality, and creates excitement with rotating specials. An extensive menu would increase costs and complexity, while copying competitors doesn't leverage Sarah's unique offerings. Different menus per location would be logistically challenging and confusing for customers."
    },
    {
      id: 3,
      title: "Pricing Strategy",
      content: "Given the competitive landscape and Sarah's unique fusion offerings, what pricing strategy should Street Eats adopt?",
      type: "question",
      icon: <DollarSign size={40} className="text-blue-500" />,
      options: [
        { id: "a", text: "Premium pricing (20% higher than competitors)" },
        { id: "b", text: "Value pricing (10-15% lower than competitors)" },
        { id: "c", text: "Competitive pricing (match existing food trucks)" },
        { id: "d", text: "Tiered pricing with both budget and premium options" }
      ],
      correctAnswer: "d",
      explanation: "Tiered pricing with both budget and premium options allows Street Eats to attract different customer segments. Entry-level items build trial and traffic, while premium options showcase the unique fusion cuisine. This approach maximizes revenue potential while ensuring accessibility. Premium-only pricing could limit customer base, value pricing might undervalue the unique offerings, and matching competitors doesn't capitalize on the unique value proposition."
    },
    {
      id: 4,
      title: "Marketing Approach",
      content: "With a limited marketing budget, how should Sarah promote Street Eats to build awareness and attract customers?",
      type: "question",
      icon: <Users size={40} className="text-purple-500" />,
      options: [
        { id: "a", text: "Traditional advertising (local newspaper, radio spots)" },
        { id: "b", text: "Social media focus with location updates and food photos" },
        { id: "c", text: "Email marketing campaign to collected addresses" },
        { id: "d", text: "Rely primarily on word-of-mouth and truck visibility" }
      ],
      correctAnswer: "b",
      explanation: "Social media is cost-effective and ideal for food businesses, allowing Street Eats to showcase visually appealing food, announce locations, and engage with customers. It's particularly effective for mobile businesses where location changes frequently. Traditional advertising is expensive with less targeting, email marketing requires an existing customer base, and word-of-mouth alone is too passive for a new business."
    },
    {
      id: 5,
      title: "Seasonal Adaptation",
      content: "Ontario winters present challenges for food truck operations. How should Street Eats adapt during winter months (December-March)?",
      type: "question",
      icon: <Calendar size={40} className="text-indigo-500" />,
      options: [
        { id: "a", text: "Shut down operations completely during winter" },
        { id: "b", text: "Partner with indoor venues (breweries, markets) for pop-ups" },
        { id: "c", text: "Pivot to catering and private events only" },
        { id: "d", text: "Continue normal operations but with reduced hours" }
      ],
      correctAnswer: "b",
      explanation: "Partnering with indoor venues like breweries, markets, and events creates a win-win situation, allowing Street Eats to maintain revenue during winter while providing food options to partner locations. Complete shutdown eliminates all revenue for months, pivoting to catering alone limits brand visibility, and continuing normal operations would face significant challenges with weather and reduced foot traffic."
    },
    {
      id: 6,
      title: "Financing Structure",
      content: "Sarah has $40,000 in savings, but full food truck setup could cost $35,000-$50,000. What financing approach should she take?",
      type: "question",
      icon: <TrendingUp size={40} className="text-pink-500" />,
      options: [
        { id: "a", text: "Use all savings and seek a small business loan for the remainder" },
        { id: "b", text: "Start with a used, lower-cost food truck within her budget" },
        { id: "c", text: "Begin with a food cart/kiosk to test market before full truck investment" },
        { id: "d", text: "Find a business partner to contribute additional capital" }
      ],
      correctAnswer: "c",
      explanation: "Starting with a food cart or kiosk requires less initial investment, allowing Sarah to test her concept, build a customer base, and refine operations before committing to a full food truck. This approach reduces financial risk while proving the business model. Taking on debt immediately increases financial pressure, while a used truck might have maintenance issues. Finding a suitable business partner takes time and dilutes ownership."
    },
    {
      id: 7,
      title: "Growth Plan",
      content: "What should be Street Eats' 3-year growth strategy after successful market entry?",
      type: "question",
      icon: <TrendingUp size={40} className="text-yellow-500" />,
      options: [
        { id: "a", text: "Expand to multiple food trucks in different cities" },
        { id: "b", text: "Open a brick-and-mortar restaurant location" },
        { id: "c", text: "Focus on profitability with the single truck and developing catering" },
        { id: "d", text: "Create a line of packaged sauces and products from popular recipes" }
      ],
      correctAnswer: "c",
      explanation: "Focusing on profitability with the single truck and developing catering services builds a sustainable foundation before expansion. This approach allows Sarah to maximize the current business, establish financial stability, and build a loyal customer base while keeping expenses manageable. Expanding too quickly with multiple trucks or a restaurant creates significant financial and operational challenges. Product lines require different production and distribution capabilities."
    },
    {
      id: 8,
      title: "Congratulations!",
      content: "You've successfully helped Sarah develop a market entry strategy for Street Eats food truck in St. Catharines! Your strategy will help her establish a strong presence in the local food scene with her unique fusion cuisine.",
      type: "conclusion",
      summary: [
        "Location: Rotate between multiple locations",
        "Menu: Limited core menu with rotating specials",
        "Pricing: Tiered pricing with budget and premium options",
        "Marketing: Social media focus",
        "Winter: Partner with indoor venues",
        "Financing: Start with food cart/kiosk to test market",
        "Growth: Focus on profitability and catering"
      ]
    }
  ];

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId
    });
  };

  const checkAnswer = () => {
    const currentQuestion = caseStudyStages[currentStage];
    const selected = selectedAnswers[currentQuestion.id];
    
    if (selected === currentQuestion.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    
    setShowFeedback(true);
  };

  const moveToNextStage = () => {
    if (currentStage < caseStudyStages.length - 1) {
      setCurrentStage(currentStage + 1);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const retryQuestion = () => {
    setShowFeedback(false);
  };

  const resetCase = () => {
    setCurrentStage(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setIsCorrect(false);
    setCompleted(false);
  };

  const currentStageData = caseStudyStages[currentStage];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Street Eats Food Truck</h1>
          <div className="bg-white px-4 py-2 rounded-full text-orange-500 font-bold">
            {currentStage > 0 && currentStage < 8 ? `Question ${currentStage}/7` : ''}
          </div>
        </div>
        <p className="text-white mt-2">Market Entry Strategy Case Study</p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-orange-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStage / (caseStudyStages.length - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Content card */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          {currentStageData.icon && <div className="mr-4">{currentStageData.icon}</div>}
          <h2 className="text-2xl font-bold text-gray-800">{currentStageData.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{currentStageData.content}</p>

        {/* Question options */}
        {currentStageData.type === 'question' && !showFeedback && (
          <div className="space-y-3">
            {currentStageData.options.map((option) => (
              <div 
                key={option.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all
                  ${selectedAnswers[currentStageData.id] === option.id 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                onClick={() => handleOptionSelect(currentStageData.id, option.id)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 border
                    ${selectedAnswers[currentStageData.id] === option.id 
                      ? 'bg-orange-500 border-orange-500 text-white' 
                      : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswers[currentStageData.id] === option.id && <Check size={14} />}
                  </div>
                  <p>{option.text}</p>
                </div>
              </div>
            ))}

            <button 
              className={`mt-6 px-6 py-3 rounded-lg font-semibold text-white shadow-md transition-all
                ${selectedAnswers[currentStageData.id] 
                  ? 'bg-orange-500 hover:bg-orange-600' 
                  : 'bg-gray-300 cursor-not-allowed'
                }`}
              onClick={checkAnswer}
              disabled={!selectedAnswers[currentStageData.id]}
            >
              Submit Answer
            </button>
          </div>
        )}

        {/* Feedback area */}
        {showFeedback && (
          <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <>
                  <Check size={24} className="text-green-500 mr-2" />
                  <h3 className="font-bold text-green-700">Correct!</h3>
                </>
              ) : (
                <>
                  <X size={24} className="text-red-500 mr-2" />
                  <h3 className="font-bold text-red-700">Not quite right</h3>
                </>
              )}
            </div>
            <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
              {currentStageData.explanation}
            </p>

            <div className="flex mt-4">
              {isCorrect ? (
                <button 
                  className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center"
                  onClick={moveToNextStage}
                >
                  Continue <ChevronRight size={18} className="ml-1" />
                </button>
              ) : (
                <button 
                  className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all flex items-center"
                  onClick={retryQuestion}
                >
                  Try Again <RefreshCw size={18} className="ml-1" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Intro and conclusion content */}
        {(currentStageData.type === 'intro' || currentStageData.type === 'conclusion') && (
          <>
            {currentStageData.type === 'conclusion' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Your Market Entry Strategy:</h3>
                <ul className="space-y-1">
                  {currentStageData.summary.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button 
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all flex items-center"
              onClick={currentStageData.type === 'intro' ? moveToNextStage : resetCase}
            >
              {currentStageData.type === 'intro' ? 'Start Case Study' : 'Restart Case Study'} 
              {currentStageData.type === 'intro' ? <ChevronRight size={18} className="ml-1" /> : <RefreshCw size={18} className="ml-1" />}
            </button>
          </>
        )}
      </div>

      {/* Food truck illustration */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6 flex justify-center">
        <svg width="300" height="160" viewBox="0 0 300 160" className="mt-2">
          {/* Food truck illustration */}
          <rect x="50" y="90" width="200" height="60" fill="#f97316" rx="5" />
          <rect x="50" y="70" width="120" height="20" fill="#f97316" rx="5" />
          <rect x="60" y="80" width="40" height="20" fill="#f8fafc" rx="3" />
          <rect x="110" y="80" width="50" height="20" fill="#f8fafc" rx="3" />
          <rect x="170" y="80" width="70" height="50" fill="#f8fafc" rx="3" />
          <text x="185" y="110" fontFamily="Arial" fontSize="12" fill="#f97316" fontWeight="bold">STREET</text>
          <text x="190" y="122" fontFamily="Arial" fontSize="12" fill="#f97316" fontWeight="bold">EATS</text>
          <circle cx="80" cy="150" r="15" fill="#0f172a" />
          <circle cx="80" cy="150" r="7" fill="#cbd5e1" />
          <circle cx="220" cy="150" r="15" fill="#0f172a" />
          <circle cx="220" cy="150" r="7" fill="#cbd5e1" />
          <rect x="155" y="150" width="60" height="3" fill="#0f172a" />
          <rect x="75" y="130" width="10" height="3" fill="#0f172a" />
          <rect x="215" y="130" width="10" height="3" fill="#0f172a" />
        </svg>
      </div>
    </div>
  );
};

export default FoodTruckCaseStudy;
