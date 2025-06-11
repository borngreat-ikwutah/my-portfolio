const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink: string
}[] = [
  {
    name: 'Chainspace HQ',
    description: 'A Web3 Developer Hub where developers can learn about Web3 technologies, tools, and resources.',
    liveLink: 'https://www.chainspacehq.com/',
    previewImage: '/chainspace-hq-pics.png',
  },
  {
    name: 'Proxymed Healthcare',
    description: 'A healthcare platform that provides telemedicine services, allowing patients to consult with doctors online.',
    liveLink: 'https://prxy.health/',
    previewImage: '/proxymed.png',
  },
  {
    name: 'Proxymed Admin Dashboard',
    description: 'An admin dashboard for managing healthcare services and patient data.',
    liveLink: 'https://dashboard.prxy.health/',
    previewImage: '/proxymed-admin.png',
  },
  {
    name: 'Hoobank',
    description: 'A modern banking app that allows users to manage their finances, make transactions, and track spending.',
    liveLink: 'https://hoobank-cli.vercel.app/',
    previewImage: '/hoobank-cli.png',
    repoUrl: 'https://github.com',
  },
  {
    name: "Zentry",
    description: "A modern day clone of Zentry, a Web3 platform that connects users to the metaverse",
    liveLink: "https://zentry-clone-ten-tau.vercel.app/",
    previewImage: "/zentry.png",
    repoUrl: ""
  }
]

export default PROJECTS
