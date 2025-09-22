"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SimpleIcons } from "@/components/simple-icons"

interface LoadingModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  url?: string
  children?: React.ReactNode
}

export function LoadingModal({ isOpen, onClose, title = "Carregando...", url, children }: LoadingModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      // Simular carregamento
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] bg-gray-900 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
          <CardTitle className="text-white">{title}</CardTitle>
          <div className="flex gap-2">
            {url && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(url, "_blank")}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <SimpleIcons.ExternalLink className="w-4 h-4 mr-2" />
                Abrir em nova aba
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <SimpleIcons.X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 overflow-auto max-h-[70vh]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <div className="animate-spin mb-4">
                <SimpleIcons.Loader className="w-8 h-8" />
              </div>
              <p>Carregando conteúdo...</p>
            </div>
          ) : (
            <div className="text-white">{children || <p>Conteúdo carregado com sucesso!</p>}</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
