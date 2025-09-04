import { CONFIG } from "./config.js";

// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch(`${CONFIG.API_URL}/posts`); // usa a URL do config
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
