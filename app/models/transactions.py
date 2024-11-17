from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'amount': self.amount,
            'description': self.description
        }
