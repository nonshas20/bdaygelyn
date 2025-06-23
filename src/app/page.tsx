'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Get all image filenames
const imageFiles = [
  '044c65f9-160f-4360-9b64-255cbff3b940.jpeg',
  '06b92b5c-459b-4566-8d8a-30d8d45f6b5f.jpeg',
  '078a12a9-c650-4782-bb48-8e31498bd1db.jpeg',
  '07b89294-bff8-43c8-b805-599cf765bbe5.jpeg',
  '08ca3457-2fdc-41f8-a948-6571f05eba47.jpeg',
  '0f76096c-3209-4993-bf62-bd9e5a51599a.jpeg',
  '1e7ff33e-8c5b-419e-82b8-dd95147f29ee.jpeg',
  '247e1675-937c-44db-a57f-17355430a8f9.jpeg',
  '2b0fc29f-9ee5-4bfa-82db-2e842329a254.jpeg',
  '5aa09998-a4d5-4d55-9773-cb6eb49c5ed1.jpeg',
  '6bf15439-9ceb-4426-a729-bd65e6a34523.jpeg',
  '6ee350aa-3863-44d5-832d-825139739fbe.jpeg',
  '7464f294-c573-47f9-bb2b-318f2b0f71e8.jpeg',
  '854a6d94-14f4-436c-af4d-6c5d726cbf10.jpeg',
  '94a527d0-eb96-4d19-b253-66065eee8dee.jpeg',
  'ac523e7a-2ec6-4419-adac-83bbca9144d2.jpeg',
  'b6addc8a-8209-478c-8f74-c128c88572e9.jpeg',
  'cc640dd0-0cfd-4721-9f92-57628a118c0b.jpeg',
  'cc74d267-5bbe-47e0-a550-334dedc8b72f.jpeg',
  'd68e1e14-3cb6-4c2f-a2b0-0b7ec8579a3a.jpeg',
  'db9ae2ab-9c2f-4ec0-bfad-8f334bacf664.jpeg',
  'e996047f-329a-4dbb-89ac-865ad2efdc88.jpeg',
  'fada6da6-5397-45ed-9bd7-d15c72ada6ae.jpeg',
  'fd68a11e-b6a7-4105-8e9b-ad4ebe319ccb.jpeg',
  'fe3f6f5f-e7ba-4d4b-8e5c-c395a9d79b94.jpeg'
]

type Phase = 'intro1' | 'intro2' | 'intro3' | 'song' | 'heart'

// Heart formation component
function HeartFormation({
  images,
  imageFiles,
  showLetter
}: {
  images: number[]
  imageFiles: string[]
  showLetter: boolean
}) {
  // Heart shape coordinates (normalized to 0-1 range) - better spaced for mobile
  const heartPositions = [
    // Top left curve
    { x: 0.25, y: 0.15 }, { x: 0.2, y: 0.12 }, { x: 0.15, y: 0.1 }, { x: 0.12, y: 0.08 },
    { x: 0.1, y: 0.06 }, { x: 0.15, y: 0.04 }, { x: 0.25, y: 0.04 }, { x: 0.35, y: 0.06 },
    { x: 0.42, y: 0.1 }, { x: 0.45, y: 0.15 },
    // Top right curve
    { x: 0.55, y: 0.15 }, { x: 0.58, y: 0.1 }, { x: 0.65, y: 0.06 }, { x: 0.75, y: 0.04 },
    { x: 0.85, y: 0.04 }, { x: 0.9, y: 0.06 }, { x: 0.88, y: 0.08 }, { x: 0.85, y: 0.1 },
    { x: 0.8, y: 0.12 }, { x: 0.75, y: 0.15 },
    // Body of heart - more spread out
    { x: 0.7, y: 0.2 }, { x: 0.65, y: 0.25 }, { x: 0.6, y: 0.3 }, { x: 0.55, y: 0.35 },
    { x: 0.5, y: 0.4 }
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Heart formation */}
      {images.map((imageIndex, i) => {
        const position = heartPositions[i % heartPositions.length]
        const delay = i * 0.1

        return (
          <motion.div
            key={imageIndex}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay, duration: 0.5, type: "spring" }}
            className="absolute"
            style={{
              left: `${position.x * 100}%`,
              top: `${position.y * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Image
              src={`/images/${imageFiles[imageIndex]}`}
              alt={`Memory ${imageIndex + 1}`}
              width={45}
              height={45}
              className="rounded-full shadow-lg object-cover border-2 border-white/50"
              unoptimized
            />
          </motion.div>
        )
      })}

      {/* Letter in center */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-2xl text-gray-800 max-w-xs mx-4 max-h-96 overflow-y-auto"
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg font-bold mb-2 text-pink-600 text-center">
                My Dearest Gelyn 💕
              </h2>
              <div className="text-xs space-y-1.5 leading-relaxed">
                <p>hi loveee!</p>
                <p>bago matapos bday mo gusto ko lang mag thank you</p>
                <p>kahit di tayo nagkita today, i'll make it up to u</p>
                <p>swerte ko pa rin kasi kahit papano nakasama kita nung weekend sa swimming and super nag enjoy ako kasi kasama kita thank u po</p>
                <br />
                <p>malapit na tayo mag 1 year</p>
                <p>ang dami nating pinagdaanan, pero andito ka pa rin</p>
                <p>ikaw pa rin</p>
                <p>kahit minsan gusto na kita i-report sa barangay dahil sa mood swing mong biglaan</p>
                <p>pero mahal pa rin kita heheheheh</p>
                <br />
                <p>pero on a real note love, salamat talaga</p>
                <p>sa patience, sa pag intindi, sa lahat</p>
                <p>deserve mo yung araw na 'to</p>
                <p>at mas deserve mo pa yung mga araw na darating</p>
                <br />
                <p className="font-semibold text-pink-600">i love you</p>
                <p>pag nag ka budget nako sa bali kita i bibirthday sige, ganda ng view natin dun take pics all u want gamit iphone 25 pro max fully paid ko hehehe</p>
                <br />
                <p className="text-center font-bold text-pink-600">SLEEPWELL AND GOODNIGHT LOVE I LOVE UEU UE UEVUEVU E</p>
              </div>
              <motion.div
                className="mt-3 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  💕
                </motion.div>
                <p className="text-xs text-pink-600 mt-2">Happy Birthday, my love! 🎂</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>('intro1')
  const [heartImages, setHeartImages] = useState<number[]>([])
  const [showHeartLetter, setShowHeartLetter] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)

  useEffect(() => {
    if (phase === 'intro1') {
      const timer = setTimeout(() => setPhase('intro2'), 3000)
      return () => clearTimeout(timer)
    } else if (phase === 'intro2') {
      const timer = setTimeout(() => setPhase('intro3'), 3000)
      return () => clearTimeout(timer)
    } else if (phase === 'intro3') {
      const timer = setTimeout(() => setPhase('song'), 3000)
      return () => clearTimeout(timer)
    } else if (phase === 'song') {
      setMusicStarted(true)
      const timer = setTimeout(() => setPhase('heart'), 4000)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // Heart formation effect
  useEffect(() => {
    if (phase === 'heart') {
      const interval = setInterval(() => {
        setHeartImages(prev => {
          if (prev.length < imageFiles.length) {
            return [...prev, prev.length]
          } else {
            clearInterval(interval)
            setTimeout(() => setShowHeartLetter(true), 1000)
            return prev
          }
        })
      }, 300) // Add new image every 300ms

      return () => clearInterval(interval)
    }
  }, [phase])



  const renderIntroText = () => {
    const texts = {
      intro1: "HI love - your poging boyfriend",
      intro2: "so before ur day end",
      intro3: "heres a little bday gift for u!",
      song: "remember our song?"
    }
    
    return (
      <motion.div
        key={phase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white text-shadow mb-8">
          {texts[phase as keyof typeof texts]}
        </h1>
        {phase === 'intro1' && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            💕
          </motion.div>
        )}
        {phase === 'song' && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            🎵
          </motion.div>
        )}
      </motion.div>
    )
  }

  return (
    <div className="romantic-bg min-h-screen flex items-center justify-center p-4">
      {/* Background music that continues playing */}
      {musicStarted && (
        <audio autoPlay loop className="hidden">
          <source src="/audio/melancholy.mp3" type="audio/mpeg" />
        </audio>
      )}

      <AnimatePresence mode="wait">
        {(phase === 'intro1' || phase === 'intro2' || phase === 'intro3' || phase === 'song') && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-2xl"
          >
            {renderIntroText()}
          </motion.div>
        )}

        {phase === 'heart' && (
          <motion.div
            key="heart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-screen relative overflow-hidden"
          >
            <HeartFormation
              images={heartImages}
              imageFiles={imageFiles}
              showLetter={showHeartLetter}
            />
          </motion.div>
        )}




      </AnimatePresence>
    </div>
  )
}
