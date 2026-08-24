import { motion } from 'framer-motion';

interface AuthSwitchProps {
  role: 'designer' | 'manufacturer';
  onChange: (role: 'designer' | 'manufacturer') => void;
}

export function AuthSwitch({ role, onChange }: AuthSwitchProps) {
  return (
    <div className="relative flex items-center w-full bg-ink/5 p-1 rounded-full border border-ink/10">
      {/* Background slide animation */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm border border-black/5 pointer-events-none"
        animate={{
          left: role === 'designer' ? '4px' : '50%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />

      <button
        type="button"
        onClick={() => onChange('designer')}
        className={`relative z-10 w-1/2 py-2.5 text-sm font-semibold transition-colors duration-200 ${
          role === 'designer' ? 'text-ink' : 'text-ink/50 hover:text-ink/70'
        }`}
      >
        I am a Designer
      </button>

      <button
        type="button"
        onClick={() => onChange('manufacturer')}
        className={`relative z-10 w-1/2 py-2.5 text-sm font-semibold transition-colors duration-200 ${
          role === 'manufacturer' ? 'text-ink' : 'text-ink/50 hover:text-ink/70'
        }`}
      >
        I am a Manufacturer
      </button>
    </div>
  );
}
