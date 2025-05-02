import Component from "../portfolio-landing-page"

async function getLatestVersion() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/celsojuniorladislau/SistemaDeImpressaoDeEtiquetas/releases/latest",
      {
        next: { revalidate: 3600 },
      }
    )
    const data = await res.json()
    return data.tag_name || "v?.?.?"
  } catch {
    return "v?.?.?"
  }
}

export default async function Page() {
  const latestVersion = await getLatestVersion()
  return <Component latestVersion={latestVersion} />
}
