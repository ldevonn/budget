from flask import Blueprint, request, jsonify
from db import db
from app.models.transactions import Transaction

transaction_bp = Blueprint('transaction_bp', __name__)

@transaction_bp.route('/', methods=['POST'])
def add_transaction():
    data = request.get_json()
    amount = data.get('amount')
    description = data.get('description')

    if not amount or not description:
        return jsonify({'error': 'Amount and description are required'}), 400

    new_transaction = Transaction(amount=amount, description=description)
    db.session.add(new_transaction)
    db.session.commit()

    return jsonify({'message': 'Transaction added successfully', 'transaction': {'amount': amount, 'description': description}}), 201

@transaction_bp.route('/', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    result = [{'id': txn.id, 'amount': txn.amount, 'description': txn.description} for txn in transactions]
    return jsonify(result)

@transaction_bp.route('/<int:id>', methods=['GET'])
def get_transaction(id):
    txn = Transaction.query.get_or_404(id)
    return jsonify({'id': txn.id, 'amount': txn.amount, 'description': txn.description})

# Register the blueprint in a separate function to avoid circular imports
def register_routes(app):
    app.register_blueprint(transaction_bp, url_prefix='/transactions')
