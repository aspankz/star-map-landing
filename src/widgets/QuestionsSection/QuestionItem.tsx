'use client'
import { QuestionOpenIcon } from '@/shared/ui/icons/QuestionOpenIcon '
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
  question: string
  answer: React.JSX.Element
}

export const QuestionItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div
      className="w-[50rem] rounded-xl bg-[#1f1b3a] px-4 py-6 tablet:w-full"
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <button onClick={toggleOpen} className="flex items-center gap-2 text-left">
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <QuestionOpenIcon />
        </motion.div>
        <span className="text-xl font-medium">{question}</span>
      </button>

      <AnimatePresence>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden ps-10 pt-2 text-text-secondary"
        >
          {answer}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
