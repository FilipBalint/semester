import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupBlogu = defineStore('blog', {
  state: () => ({
    data: data.blog,
  }), 
});
