from app.models import db, Transaction, environment, SCHEMA
from sqlalchemy.sql import text


def seed_transactions():
    demo = Transaction(
        amount=3.99, description='McDonalds')

    db.session.add(demo)
    db.session.commit()


def undo_transactions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.transactions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM transactions"))

    db.session.commit()