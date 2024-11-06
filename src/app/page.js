'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import ContentDisplay from '../components/ContentDisplay'
import HistorySection from '../components/HistorySection'
import RefreshContentButton from '../components/RefreshContentButton'

export default function HomePage() {
  const [content, setContent] = useState('')
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/content-history`)
      setHistory(response.data.history)
    } catch (error) {
      console.error("Error fetching history:", error)
    }
  }

  const generateContent = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/generate-content`)
      setContent(response.data.content)
      await fetchHistory()
    } catch (error) {
      console.error("Error generating content:", error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchHistory()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-900 mb-12">AI Content Generator</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ContentDisplay content={content} loading={loading} />
            <div className="flex justify-center">
              <RefreshContentButton onClick={generateContent} />
            </div>
          </div>
          <HistorySection history={history} />
        </div>
      </div>
    </div>
  )
}