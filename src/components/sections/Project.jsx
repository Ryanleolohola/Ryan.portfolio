import { RevealOnScroll } from "../RevealOnScroll";
export const Projects =() =>{

    return<section id="projects" className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
     <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-bule-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">"Portfolio Website using React"</h3>
            <p className="text-gray-400 mb-4">
                這個網站我使用了以下幾種語言來撰寫而成
            </p>
            <div>
               {["React","Node.js","Tailwind.CSS","JavaScript","vite.js"].map((tech, key)  =>(
                 <span
                 key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-fulltext-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition"
                                 >
                           {tech}
                 </span>
               ))}
               </div>
               <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project</a>
               </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-bule-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">"My practice HTML website project"</h3>
            <p className="text-gray-400 mb-4">
                這個網站是我當初學習HTML所嘗試架設的我耗費了大量的時間學習有關HTML的小技巧以及必備知識
            </p>
            <div>
               {["HTML"].map((tech, key)  =>(
                 <span
                 key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-fulltext-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition"
                                 >
                           {tech}
                 </span>
               ))}
               </div>
               <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project</a>
               </div>
            </div>
            </div>           
        </div>  
         </RevealOnScroll>
        
        
    </section>;
};