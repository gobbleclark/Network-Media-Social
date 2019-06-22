class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :user_name
      t.string :company
      t.string :position
      t.string :skills
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
