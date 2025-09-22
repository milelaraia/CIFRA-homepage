import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LessonModalHandler } from "@/components/lesson-modal-handler"

export const metadata: Metadata = {
  title: "CIFRA - Sistema de Treinamento",
  description: "Checagem Inteligente de Fraudes e Ameaças",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <LessonModalHandler />
      </body>
    </html>
  )
}
