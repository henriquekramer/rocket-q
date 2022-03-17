module.exports = {
  index(req, res){
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password /* esse último .password vem do name="password" do input que recebe a senha do room.ejs*/
  }
}