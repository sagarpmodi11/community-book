import { defineStore } from "pinia";
import { ref } from "vue";

export const useMembersStore = defineStore("members", () => {
  const members = ref([]);

  const setMembers = (membersData) => {
    members.value = membersData;
  };

  const findMemberById = (id) => {
    if (members.value) {
      const member = members.value.find((member) => member.MemberId === id);
      return member || null;
    }
    return null;
  };

  const clearMembers = () => {
    members.value = null;
  };

  return {
    members,
    setMembers,
    clearMembers,
    findMemberById,
  };
});
