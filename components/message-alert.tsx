"use client"

import { useEffect } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SimpleIcons } from "@/components/simple-icons"

export type MessageType = "success" | "error" | "warning" | "info"

interface Message {
  id: string
  type: MessageType
  content: string
}

interface MessageAlertProps {
  messages: Message[]
  onDismiss: (id: string) => void
}

export function MessageAlert({ messages, onDismiss }: MessageAlertProps) {
  useEffect(() => {
    // Auto-dismiss messages after 5 seconds
    messages.forEach((message) => {
      const timer = setTimeout(() => {
        onDismiss(message.id)
      }, 5000)
      return () => clearTimeout(timer)
    })
  }, [messages, onDismiss])

  const getIcon = (type: MessageType) => {
    switch (type) {
      case "success":
        return <SimpleIcons.Check className="w-4 h-4" />
      case "error":
        return <SimpleIcons.X className="w-4 h-4" />
      case "warning":
        return <SimpleIcons.AlertTriangle className="w-4 h-4" />
      case "info":
        return <SimpleIcons.Info className="w-4 h-4" />
      default:
        return <SimpleIcons.Info className="w-4 h-4" />
    }
  }

  const getAlertClass = (type: MessageType) => {
    switch (type) {
      case "success":
        return "border-green-500 bg-green-500/10 text-green-400"
      case "error":
        return "border-red-500 bg-red-500/10 text-red-400"
      case "warning":
        return "border-yellow-500 bg-yellow-500/10 text-yellow-400"
      case "info":
        return "border-blue-500 bg-blue-500/10 text-blue-400"
      default:
        return "border-gray-500 bg-gray-500/10 text-gray-400"
    }
  }

  if (messages.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {messages.map((message) => (
        <Alert key={message.id} className={`${getAlertClass(message.type)} relative`}>
          <div className="flex items-start gap-2">
            {getIcon(message.type)}
            <AlertDescription className="flex-1">{message.content}</AlertDescription>
            <button onClick={() => onDismiss(message.id)} className="text-current hover:opacity-70 transition-opacity">
              <SimpleIcons.X className="w-3 h-3" />
            </button>
          </div>
        </Alert>
      ))}
    </div>
  )
}
