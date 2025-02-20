import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CompendiumIndex from './components/compendium/CompendiumIndex.tsx'
import CompendiumLayout from './components/compendium/CompendiumLayout.tsx'
import TraitViewer from './components/traitViews/TraitViewer.tsx'
import CharacterViewerIndex from './components/characterViewer/CharacterViewerIndex.tsx'
import CharacterViewerLayout from './components/characterViewer/CharacterViewerLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" index element = {<App/>}/>
      <Route path = "compendium" element = {<CompendiumLayout/>}>
        <Route index element = {<CompendiumIndex/>}/>
        {/* TODO: add the following menu options to the compendium
        <Route path = "talents" element={<TalentViewer/>}/>
        <Route path = "gear" element={<GearViewer/>}/>
        <Route path = "backgrounds" element={<BackgroundViewer/>}/>
        <Route path = "species" element={<SpeciesViewer/>}/>*/}
        <Route path = "traits" element={<TraitViewer/>}/>
      </Route>
      <Route path = "characters" element = {<CharacterViewerLayout/>}>
        <Route index element = {<CharacterViewerIndex/>}/>
        {/*<Route path=":pid" element={<InspectCharacter />} />
          <Route path=":pid/edit" element={<EditCharacter />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
