export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      texto:
        "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque, aliquam impedit quam iure nihil rem cum incidunt nesciunt laboriosam.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      texto:
        "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque, aliquam impedit quam iure nihil rem cum incidunt nesciunt laboriosam.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      texto:
        "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates atque, aliquam impedit quam iure nihil rem cum incidunt nesciunt laboriosam.",
      picture: null,
    },
  ],
});