import React, { useState, useEffect } from 'react';
import { Heart, Globe, BookOpen, Users, GraduationCap, Star } from 'lucide-react';
import img8 from "../assets/8.jpg";   // left side static image
import img1 from "../assets/1.jpg";   // carousel image 1
import img3 from "../assets/3.jpg";   // carousel image 2
import img20 from "../assets/20.jpg";
import img10 from "../assets/10.jpg"; // carousel image 3


function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    awards: 0,
    teachers: 0,
    success: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const schoolImages = [
    {
      src:img1,
      alt: "Modern classroom with students",
      title: "Interactive Learning Environment"
    },
    {
      src: img3, 
      alt: "Students in large lecture hall",
      title: "Spacious Academic Halls"
    },
    {
      src: img20,
      alt: "Students during examination",
      title: "Excellence in Academics"
    },
    {
      src: img10,
      alt: "Students during examination",
      title: "Excellence in Academics"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);

            const animateCounters = () => {
              const targets = { students: 1710, awards: 35, teachers: 50, success: 95 };
              const duration = 2000;
              const startTime = Date.now();

              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easeOut = 1 - Math.pow(1 - progress, 3);

                setCounters({
                  students: Math.floor(targets.students * easeOut),
                  awards: Math.floor(targets.awards * easeOut),
                  teachers: Math.floor(targets.teachers * easeOut),
                  success: Math.floor(targets.success * easeOut)
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCounters(targets);
                }
              };

              setTimeout(() => requestAnimationFrame(animate), 300);
            };

            animateCounters();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % schoolImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [schoolImages.length]);

  return (
    <div
      id="about"
      className="relative min-h-screen overflow-hidden select-none p-4 sm:p-6 lg:p-12 bg-gradient-radial from-purple-50 via-white to-pink-50 rounded-3xl shadow-2xl"
      style={{ maxWidth: '1400px', margin: 'auto' }}
    >
      {/* Abstract SVG shapes as background */}
      <svg className="absolute top-0 -left-20 w-80 h-80 opacity-60 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="url(#grad1)" />
        <defs>
          <radialGradient id="grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="absolute bottom-0 right-0 w-96 h-96 opacity-50 z-0" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" rx="30" fill="url(#grad2)" />
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Additional Creative Background Elements */}
      <svg className="absolute top-1/3 right-1/4 w-32 h-32 opacity-30 z-0 animate-float" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 90,35 73,85 27,85 10,35" fill="url(#grad3)" />
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="absolute top-2/3 left-1/3 w-24 h-24 opacity-40 z-0 animate-float-delayed" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="url(#grad4)" />
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <svg className="absolute top-1/4 left-2/3 w-16 h-16 opacity-50 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#grad5)" strokeWidth="8" strokeDasharray="20 10" />
        <defs>
          <linearGradient id="grad5" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60 z-0 animate-pulse"></div>
      <div className="absolute top-1/6 right-1/3 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70 z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/6 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 z-0 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-4 relative z-5">
        {/* Left Side */}
        <div className={`lg:col-span-3 relative flex items-center justify-center p-2 sm:p-4 lg:p-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            <div className="relative z-20 w-full max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[600px] mx-auto rounded-3xl shadow-lg overflow-hidden hover:drop-shadow-2xl transition-shadow duration-500">
  <img 
    src={img8}
    alt="Happy student with books" 
    className="w-full rounded-3xl"
  />
</div>


            <div className="absolute top-8 right-32 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-80 z-10 animate-float scale-110 shadow-lg"></div>
            
            {/* Additional floating elements around the image */}
            <div className="absolute top-1/2 -left-20 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-2xl opacity-70 z-15 animate-float-delayed transform rotate-45 shadow-lg"></div>
            <div className="absolute bottom-1/4 -right-16 w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-500 rounded-full opacity-75 z-15 animate-float shadow-lg"></div>
            <div className="absolute top-1/6 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full opacity-60 z-15 animate-pulse shadow-lg"></div>

            {/* Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border-dashed border-4 border-purple-400 shadow-purple-300 transform rotate-3 hover:rotate-0 transition-transform duration-400 cursor-default min-w-[160px] hover:shadow-purple-400 scale-100 hover:scale-105 z-30">
              <div className="text-4xl font-extrabold text-purple-700 tracking-wide">{counters.students.toLocaleString()}+</div>
              <div className="text-lg text-gray-600 font-semibold leading-tight">Happy Students</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border-dashed border-4 border-pink-400 shadow-pink-300 transform -rotate-3 hover:rotate-0 transition-transform duration-400 cursor-default min-w-[160px] hover:shadow-pink-400 scale-100 hover:scale-105 z-30">
              <div className="text-4xl font-extrabold text-pink-700 tracking-wide">{counters.awards}+</div>
              <div className="text-lg text-gray-600 font-semibold leading-tight">Awards Achieved</div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-1/3 -left-12 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full p-4 drop-shadow-lg animate-float cursor-default shadow-lg hover:scale-110 transition-transform duration-300 z-25">
              <GraduationCap className="w-8 h-8" />
            </div>
            
            <div className="absolute top-1/4 -right-14 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full p-4 drop-shadow-lg animate-float-delayed cursor-default shadow-lg hover:scale-110 transition-transform duration-300 z-25">
              <Star className="w-8 h-8" />
            </div>

            <div className="absolute bottom-1/3 -left-16 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-full p-3 drop-shadow-lg animate-float cursor-default shadow-lg hover:scale-110 transition-transform duration-300 z-25" style={{animationDelay: '0.5s'}}>
              <BookOpen className="w-6 h-6" />
            </div>

            <div className="absolute top-1/2 right-1/4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full p-3 drop-shadow-lg animate-float-delayed cursor-default shadow-lg hover:scale-110 transition-transform duration-300 z-25" style={{animationDelay: '1.5s'}}>
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2 flex flex-col space-y-6 relative z-5">
          {/* Top Half - Photos Carousel */}
          <div className={`flex-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-4">
              Our Learning Environment
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mb-6"></div>

            <div className="relative h-[280px] lg:h-[320px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-shadow duration-500 z-20">
              {schoolImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentImageIndex ? 'translate-x-0 opacity-100 z-20' : 'translate-x-6 opacity-0 z-10'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-6 left-6 text-white text-xl lg:text-2xl font-extrabold drop-shadow-lg">
                    {image.title}
                  </div>
                </div>
              ))}

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                {schoolImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-8 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-gradient-to-r from-purple-700 to-pink-700' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    aria-label={`Select image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Half - Mission and Vision */}
          <div className={`flex-1 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 text-center sm:text-left">Our Purpose</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mb-6 mx-auto sm:mx-0"></div>

            <div className="space-y-6">
              {/* Vision Card */}
              <div className="group bg-white rounded-3xl p-5 lg:p-6 shadow-2xl border border-purple-300 hover:border-purple-500 transition-all cursor-default transform hover:-translate-y-2 hover:shadow-purple-400 transition transform duration-500 z-20 relative">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl text-white shadow-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-serif">
                  To inspire and empower young minds to excel academically, develop a strong moral compass, 
                  and contribute meaningfully to society as responsible global citizens.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group bg-white rounded-3xl p-5 lg:p-6 shadow-2xl border border-pink-300 hover:border-pink-500 transition-all cursor-default transform hover:-translate-y-2 hover:shadow-pink-400 transition transform duration-500 z-20 relative">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl text-white shadow-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700 leading-relaxed text-base lg:text-lg font-serif">
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Dynamic student-centered learning environment fostering growth and creativity.</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Nurture well-rounded individuals through academics, sports, arts, and culture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6.5s ease-in-out infinite 1.2s;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .z-25 {
          z-index: 25;
        }
        .z-15 {
          z-index: 15;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default About;
