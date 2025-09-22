"use client"

import type React from "react"

import { useEffect } from "react"
import { LoadingModal } from "@/components/loading-modal"
import { useState } from "react"

export function LessonModalHandler() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    url: "",
    content: null as React.ReactNode,
  })

  useEffect(() => {
    const handleLessonClick = (e: Event) => {
      const target = e.target as HTMLElement
      const lessonLink = target.closest(".lesson-link") as HTMLAnchorElement

      if (!lessonLink) return

      e.preventDefault()

      const moduleSlug = lessonLink.dataset.moduleSlug
      const lessonSlug = lessonLink.dataset.lessonSlug
      const title = lessonLink.querySelector(".text-white")?.textContent || "Carregando..."

      console.log(`[v0] Abrindo lição: ${moduleSlug}/${lessonSlug}`)

      // Simular carregamento de conteúdo da lição
      setModalState({
        isOpen: true,
        title,
        url: `/training/${moduleSlug}/${lessonSlug}`,
        content: (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-green-500">{title}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Este é um exemplo de conteúdo de lição. Em uma implementação real, este conteúdo seria carregado
                dinamicamente do servidor.
              </p>
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Objetivos da Lição:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Compreender os conceitos fundamentais</li>
                <li>• Identificar sinais de alerta</li>
                <li>• Aplicar conhecimentos na prática</li>
              </ul>
              <div className="bg-gray-800 p-4 rounded-lg mt-6">
                <h4 className="text-green-500 font-semibold mb-2">💡 Dica Importante:</h4>
                <p className="text-gray-300 text-sm">
                  Sempre verifique a autenticidade de emails suspeitos antes de clicar em links ou baixar anexos.
                </p>
              </div>
            </div>
          </div>
        ),
      })
    }

    // Adicionar event listener para clicks em lesson-links
    document.addEventListener("click", handleLessonClick)

    return () => {
      document.removeEventListener("click", handleLessonClick)
    }
  }, [])

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <LoadingModal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title} url={modalState.url}>
      {modalState.content}
    </LoadingModal>
  )
}
