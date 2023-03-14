<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = [
  {
    avatar: "https://avatars.githubusercontent.com/u/37252753?v=4",
    name: "Emre Erden",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/emr3rden" },
    ],
  },
    {
    avatar: "https://avatars.githubusercontent.com/u/106361546?v=4",
    name: "Ali Osman Delişmen",
    title: "Contributor",
    links: [
      { icon: "github", link: "https://github.com/osmandlsmn" },
    ],
  },
];
</script>

<VPTeamMembers size="small" :members="members" />
