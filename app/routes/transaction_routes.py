from flask import Blueprint, request, session, jsonify
from app.models import Transaction, db


transaction_routes = Blueprint('transactions', __name__)

@transaction_routes.route('/<userId>')
def get_transactions(userId):
    transactions = Transaction.query.filter(Transaction.userId == userId).all()
    return {'transactions': [transaction.to_dict() for transaction in transactions]}


@transaction_routes.route('/new', methods=['POST'])
def create_transaction():
    data = request.get_json()
    transaction = Transaction(
        amount=data['amount'],
        description=data['description'],
        userId=data['userId']
    )
    db.session.add(transaction)
    db.session.commit()
    return transaction.to_dict(), 201