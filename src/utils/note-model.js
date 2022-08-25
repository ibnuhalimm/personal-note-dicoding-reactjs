export default function NoteModel(title, body) {
  return {
    'id': +new Date(),
    'title': title,
    'body': body,
    'createdAt': new Date(),
    'archived': false
  }
}
