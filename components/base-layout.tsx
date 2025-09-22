"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import { LoadingModal } from "@/components/loading-modal"
import { MessageAlert, type MessageType } from "@/components/message-alert"

interface Message {
  id: string
  type: MessageType
  content: string
}

interface BaseLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export function BaseLayout({ children, showBackButton = false }: BaseLayoutProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    url: "",
    content: null as React.ReactNode,
  })

  const addMessage = (type: MessageType, content: string) => {
    const id = Date.now().toString()
    setMessages((prev) => [...prev, { id, type, content }])
  }

  const dismissMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id))
  }

  const openModal = (title: string, url?: string, content?: React.ReactNode) => {
    setModalState({
      isOpen: true,
      title,
      url: url || "",
      content,
    })
  }

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header showBackButton={showBackButton} />

      <main className="p-6">{children}</main>

      <MessageAlert messages={messages} onDismiss={dismissMessage} />

      <LoadingModal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title} url={modalState.url}>
        {modalState.content}
      </LoadingModal>
    </div>
  )
}

// Hook para usar as funcionalidades do BaseLayout
export function useBaseLayout() {
  return {
    addMessage: (type: MessageType, content: string) => {
      // Esta função seria conectada ao contexto global em uma implementação completa
      console.log(`[v0] Message: ${type} - ${content}`)
    },
    openModal: (title: string, url?: string, content?: React.ReactNode) => {
      // Esta função seria conectada ao contexto global em uma implementação completa
      console.log(`[v0] Modal: ${title}`)
    },
  }
}
