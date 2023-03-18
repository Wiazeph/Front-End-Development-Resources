<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = [
  {
    avatar: "https://avatars.githubusercontent.com/u/37252753?v=4",
    name: "Emre Erden",
    title: "Proje Sahibi",
    links: [
      { icon: "linkedin", link: "https://linkedin.com/in/emr3rden/" },
      { icon: "github", link: "https://github.com/emr3rden" },
      { icon: "twitter", link: "https://twitter.com/emr3rden" },
      { icon: "instagram", link: "https://instagram.com/emr3rden/" },
      ],
  },
    {
    avatar: "https://avatars.githubusercontent.com/u/106361546?v=4",
    name: "Ali Osman Delişmen",
    title: "Katkı Sağlayan",
    links: [
      { icon: "github", link: "https://github.com/osmandlsmn" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/65294379?v=4",
    name: "Cem Tatlı",
    title: "Katkı Sağlayan",
    links: [
      { icon: "github", link: "https://github.com/cemtatli" },
      { icon: "twitter", link: "https://twitter.com/vaycem" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/108342464?v=4",
    name: "Eray Özkan",
    title: "Katkı Sağlayan",
    links: [
      { icon: "github", link: "https://github.com/oozkanneray" },
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/42185275?v=4",
    name: "Omer Ozceylan",
    title: "Katkı Sağlayan",
    links: [
      { icon: "github", link: "https://github.com/omerozceylan" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/omer-ozceylan-8602621b5/" },
      { icon: "twitter", link: "https://twitter.com/OmerOzclyn" },
      { icon: "instagram", link: "https://www.instagram.com/scolfieid/" },
    ],
  },
];
</script>

<VPTeamMembers size="small" :members="members" />
