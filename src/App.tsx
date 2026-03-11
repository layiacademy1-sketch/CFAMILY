import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  Instagram,
  ArrowDown
} from 'lucide-react';
import { BRANCHES, Branch } from './types';

const LOGO_URL = "https://image.noelshack.com/fichiers/2026/11/3/1773264028-gemini-generated-image-jdp5w2jdp5w2jdp5.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const NeonLogo = ({ className = "w-32 h-32", animated = false }: { className?: string, animated?: boolean }) => (
    <div className={`${className} relative`}>
      <div className={`absolute inset-0 rounded-full border-4 border-yellow-400 neon-yellow-glow ${animated ? 'animate-pulse' : ''} opacity-50`} />
      <div className="absolute inset-0 rounded-full border-2 border-yellow-400 neon-yellow-glow" />
      <div className="w-full h-full rounded-full overflow-hidden bg-dark p-1">
        <img 
          src={LOGO_URL} 
          alt="CFAMILY Logo" 
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-50">
        <div className="relative mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <NeonLogo className="w-40 h-40" animated={true} />
          </motion.div>
        </div>
        
        <div className="w-64 flex flex-col items-center">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-yellow-400 shadow-[0_0_10px_#FACC15]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-yellow-400 font-display font-bold tracking-widest text-sm neon-yellow-text-glow">
            CHARGEMENT {progress}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-dark overflow-x-hidden flex flex-col">
      {/* Animated Border Light */}
      <div className="border-light-container">
        <div className="border-light" />
      </div>

      <AnimatePresence mode="wait">
        {!selectedBranch ? (
          <motion.main
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 flex flex-col items-center py-12 px-6"
          >
            <header className="text-center mb-16 flex flex-col items-center">
              <NeonLogo className="w-32 h-32 md:w-40 md:h-40 mb-8" />
              
              {/* Instagram Button */}
              <motion.a
                href="https://www.instagram.com/cfamily76/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 hover:border-yellow-400/50 transition-all group"
              >
                <Instagram className="w-5 h-5 text-yellow-400 group-hover:neon-yellow-text-glow" />
                <span className="font-display font-bold uppercase tracking-widest text-sm">Nous suivre</span>
              </motion.a>

              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-primary font-display font-black text-xl md:text-3xl uppercase tracking-tighter"
              >
                Découvrez les 5 branches de la CFAMILY
              </motion.p>
            </header>

            {/* Vertical Branches List */}
            <div className="w-full max-w-xl space-y-8 pb-32 relative">
              {/* Main Trunk Line - More subtle */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/40 via-yellow-400/10 to-transparent -translate-x-1/2 -z-20" />

              {BRANCHES.map((branch, index) => {
                return (
                  <motion.div
                    key={branch.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex justify-center"
                  >
                    {/* Branch Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedBranch(branch)}
                      className="group relative w-full max-w-md"
                    >
                      {/* Button Background & Border */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-yellow-400/50 transition-all duration-300" />
                      
                      {/* Neon Glow Layer */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(250,204,21,0.2)]" />

                      {/* Content Container */}
                      <div className="relative px-8 py-6 flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter transition-all duration-300 group-hover:neon-yellow-text-glow">
                          {branch.name}
                        </span>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-400 rounded-full group-hover:w-1/2 transition-all duration-500 shadow-[0_0_10px_#FACC15]" />
                    </motion.button>

                    {/* Down Arrow - Only if not the last branch */}
                    {index < BRANCHES.length - 1 && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowDown className="w-6 h-6 text-yellow-400 neon-yellow-text-glow" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.main>
        ) : (
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex flex-col"
          >
            <nav className="p-6 md:p-12">
              <button 
                onClick={() => setSelectedBranch(null)}
                className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors font-bold uppercase text-sm tracking-widest"
              >
                <ChevronLeft className="w-5 h-5" />
                Retour
              </button>
            </nav>

            <main className="flex-1 max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-center gap-12">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <NeonLogo className="w-24 h-24 md:w-32 md:h-32" />
              </motion.div>

              <div className="text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl md:text-7xl font-display font-black leading-none text-white uppercase tracking-tighter">
                    Présentation :
                  </h2>
                  <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full shadow-[0_0_10px_#FACC15]" />
                  <div className="space-y-4">
                    <p className="text-2xl md:text-4xl text-white/90 font-medium">
                      {selectedBranch.description}
                    </p>
                    <p className="text-3xl md:text-5xl text-yellow-400 font-display font-black neon-yellow-text-glow italic">
                      {selectedBranch.slogan}
                    </p>
                  </div>
                </motion.div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
