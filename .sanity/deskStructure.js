export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Memorial Card')
        .child(
          S.editor()
            .schemaType('memorialCard')
            .documentId('memorialCardSingleton') // fixed ID for singleton
        ),
      // ...other items
    ])
