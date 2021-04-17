export default interface IDatabaseArcRecord {
  uid: number,
  score: number,
  health: number,
  rating: number,
  song_id: string,
  modifier: number,
  difficulty: number,
  clear_type: number,
  best_clear_type: number,
  time_played: number,
  near_count: number,
  miss_count: number,
  perfect_count: number,
  shiny_perfect_count: number,
}
