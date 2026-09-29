import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { AzulejoTilePattern } from '@/components/decorative';

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 text-accent-2" style={{ opacity: 0.04 }}>
        <AzulejoTilePattern opacity={0.04} />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* Row of Goan-style doors */}
        <div className="mb-10 flex justify-center gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative"
            >
              <div
                className={`h-32 w-12 rounded-t-lg border-2 border-border bg-surface ${
                  i === 2 ? '-translate-y-2 rotate-3' : ''
                }`}
                style={i === 2 ? { transform: 'perspective(200px) rotateY(-15deg)' } : undefined}
              >
                <div className="mx-auto mt-3 h-1 w-6 rounded bg-border" />
                <div className="mx-auto mt-6 h-1 w-6 rounded bg-border" />
              </div>
              {i === 2 && (
                <div className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-accent" />
              )}
            </motion.div>
          ))}
        </div>

        <p className="eyebrow mb-4">404</p>
        <h1 className="mb-4 text-balance">The wrong door</h1>
        <p className="mb-8 text-muted text-balance">
          That door doesn't lead anywhere. Let's get you back to the porch.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity btn-press"
        >
          <ArrowLeft size={18} />
          Back home
        </Link>
      </div>
    </div>
  );
}
